/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/links              ->  index
 * POST    /api/links              ->  create
 * GET     /api/links/:id          ->  show
 * PUT     /api/links/:id          ->  upsert
 * PATCH   /api/links/:id          ->  patch
 * DELETE  /api/links/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Link from './link.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Links
export function index(req, res) {
  return Link.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a list of recent Links
export function indexRecent(req, res) {
  return Link.find().limit(6).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a list of random Links
export function indexRandom(req, res) {
  const limit = 1;
  const getArbitraryRand = function(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }

  return Link.count({}, function(err, count) {
    if (err) handleError(res);

    var skipBy = getArbitraryRand(1, (count - limit));
    Link.find().skip(skipBy).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
  });
}

// Gets a single Link from the DB
export function show(req, res) {
  return Link.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Link in the DB
export function create(req, res) {
  return Link.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Link in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }

  return Link.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Link in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Link.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Link from the DB
export function destroy(req, res) {
  return Link.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

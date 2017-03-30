'use strict';

var express = require('express');
var controller = require('./link.controller');
var router = express.Router();

router.get('/', controller.index);
router.get('/recent/:limit', controller.indexRecent);
// router.get('/indexRandom/', controller.indexRandom);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;

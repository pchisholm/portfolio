'use strict';

import mongoose from 'mongoose';

var PostSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  type: String,
  sub_type: String,
  title: String,
  sub_title: String,
  body: {},
  git_url: String
});

export default mongoose.model('Post', PostSchema);

'use strict';

import mongoose from 'mongoose';

var LinkSchema = new mongoose.Schema({
  date: {
    type: Date,
    Default: Date.now
  },
  title: String,
  desc: String,
  url: String
});

export default mongoose.model('Link', LinkSchema);

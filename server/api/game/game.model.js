'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var GameSchema = new mongoose.Schema({
  name: String,
  platform: String,
  genre: String
});

export default mongoose.model('Game', GameSchema);

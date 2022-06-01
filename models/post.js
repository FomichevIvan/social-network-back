const mongoose  = require("mongoose");

const Post = mongoose.model('Post', {
  userId: mongoose.ObjectId,
  title: String,
  body: String
});

module.exports = { Post }

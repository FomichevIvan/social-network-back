const express = require('express');
const {Post} = require("../models/post");
const router = express.Router();


router.get('/', async(req, res, next) => {
  const posts = await Post.find()
  res.status(200).json({posts});
});

router.post('/', async(req, res, next) => {
  const post = new Post(req.body);
  try {
  await post.save();
  res.status(200).json({post});
  } catch (e) {
    res.status(404).json({e});
  }
});

router.put('/', async(req, res, next) => {
  const post = await Post.findById(req.body.id);
  post.body = req.body.body;
  post.title = req.body.title;
  await post.save();
  res.status(200).json({post});
});

router.delete('/:id', async(req, res, next) => {
  await Post.findByIdAndDelete(req.params.id)
  res.status(200).json();
});

module.exports = router;

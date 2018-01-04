/**
 * GET /tweets
 * List all tweets.
 */
const utils = require('../utils/utils');
const Tweet = require('../models/Tweet.js');

exports.getTweets = (req, res) => {
  Tweet.find((err, docs) => {
    res.json(docs);
  });
};

exports.createTweet = (req, res) => {
  Tweet.create(req.body, (err, post) => {
    res.json(post);
  });
};

exports.deleteTweet = (req, res) => {
  Tweet.findByIdAndRemove(req.params.id, req.body, (err, post) => {
    res.json(post);
  });
};

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

exports.createTweets = (req, res) => {
  console.log(req.body);
  Tweet.create(req.body, (err, post) => {
    res.json(post);
  });
};

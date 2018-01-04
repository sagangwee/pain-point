const mongoose = require('mongoose');

// Define movie schema
const tweetSchema = new mongoose.Schema({
  html: String,
});

// Export Mongoose model
const Tweet =  mongoose.model('tweet', tweetSchema);
module.exports = Tweet;

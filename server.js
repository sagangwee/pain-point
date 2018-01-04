const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');

dotenv.load({ path: '.env' });

// Connect to MongoDB
mongoose.connect('mongodb://localhost/pain-point');

const apiController = require('./server/controllers/api');
const tweetController = require('./server/controllers/tweet');

const app = express();
// Logger that outputs all requests into the console
app.use(morgan('combined'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.get('/twitter', apiController.getTwitter);

app.route('/tweets')
  .get(tweetController.getTweets)
  .post(tweetController.createTweets);

const server = app.listen(port, function(){
 console.log('Listening on port ' + port);
});

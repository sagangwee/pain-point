const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.load({ path: '.env' });

const apiController = require('./server/controllers/api');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.get('/twitter', apiController.getTwitter);

const server = app.listen(port, function(){
 console.log('Listening on port ' + port);
});

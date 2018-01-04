const axios = require('axios');
const oembedEndpoint = 'https://publish.twitter.com/oembed';
const twitterURL = 'https://twitter.com/';

exports.getEmbeddedTweet = async tweetURL => {
  oembedURL = oembedEndpoint + '?url=' + encodeURIComponent(tweetURL);
  try {
    const embeddedTweet = await axios.get(oembedURL);
    return embeddedTweet.data;
  } catch (e) {
    console.log('getEmbeddedTweet error: ', e);
  }
}

exports.getTweetURL = tweet => {
  return twitterURL + tweet.user.screen_name + '/status/' + tweet.id_str;
}

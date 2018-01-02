const axios = require('axios');
const Twit = require('twit');
const oembedEndpoint = 'https://publish.twitter.com/oembed';
const twitterURL = 'https://twitter.com/'

exports.getTwitter = async (req, res, next) => {
  const T = new Twit({
    consumer_key: process.env.TWITTER_KEY,
    consumer_secret: process.env.TWITTER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });
  let lastMonthDate = new Date();
  lastMonthDate.setDate(1);
  lastMonthDate.setMonth(lastMonthDate.getMonth()-1);
  const lastMonthISODate = lastMonthDate.toISOString().slice(0, 10)
  const query = { q: 'I wish there was an easier way since:' + lastMonthISODate };
  T.get('search/tweets', query , async (err, reply) => {
    if (err) {
      console.log(err);
    }
    const topFiveTweets = getTopFiveTweets(reply.statuses);
    const promiseArray = topFiveTweets.map(tweet => getEmbeddedTweet(tweet));
    const embeddedTweets = await Promise.all(promiseArray);
    res.json(embeddedTweets);
  });
};

const getTopFiveTweets = tweets => {
  const originalTweets = tweets.filter(tweet => !tweet.retweeted);
  let sortedOriginalTweets = originalTweets.sort((a, b) => b.favorite_count - a.favorite_count);
  return sortedOriginalTweets.slice(0, 5);
}

const getTweetURL = tweet => {
  return twitterURL + tweet.user.screen_name + '/status/' + tweet.id_str;
}

const getEmbeddedTweet = async tweet => {
  oembedURL = oembedEndpoint + '?url=' + encodeURIComponent(getTweetURL(tweet));
  try {
    const embeddedTweet = await axios.get(oembedURL);
    return embeddedTweet.data;
  } catch (e) {
    console.log('getEmbeddedTweet error: ', e);
  }
}

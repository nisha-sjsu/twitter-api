require('dotenv').config();
const {TwitterApi} = require('twitter-api-v2');
const twitterClient = new TwitterApi(process.env.BEARER_TOKEN);

const {Client} = require("twitter-api-sdk");
const router = require("express").Router();

router.get("/", async (req, r) => {
  const client = new Client(process.env.BEARER_TOKEN);
  const res = await twitterClient.v2.userByUsername('maveric1303');
  var id = res.data.id
  const response = await client.tweets.usersIdTweets(id);
  console.log(response);
  return response
})

module.exports = router;
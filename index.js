const express = require("express");
// importing our custom routers
const getTweetsRouter = require("./routes/getTweets");
const postTweetRouter = require("./routes/postTweets");
const deleteTweetRouter = require("./routes/deleteTweets");

const app = express();

app.use("/getTweets", getTweetsRouter);
app.use("/postTweet", postTweetRouter);
app.use("/deleteTweet", deleteTweetRouter);

const URL = process.env.URL || 'http://127.0.0.1';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listening on port %s", port);
});
//DONT FORGET TO require MODEL

const streamController = {};

twitchController.sendApiTwitch = (req, res) => {
  res.json({
    message:"ok",
    data: res.local.streams,
  })
}






//

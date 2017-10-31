//DONT FORGET TO require MODEL
const halpers = require('../halp.js')
const streamController = {};

streamController.getTwitchApi = (req, res) => {
  res.json({
    message: "ok",
    streams: res.locals.streams,
  })
}

streamController.getYouTubeApi = (req, res) =>{
  res.json({
    message:'ok',
    streams: res.locals.streams,
  })
}

streamController.index = (req, res) => {
    res.render('../views/index.ejs',{
      twitch:res.locals.streams,
    })
  }





module.exports = streamController

//

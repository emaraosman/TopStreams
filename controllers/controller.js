//DONT FORGET TO require MODEL
const halpers = require('../halp.js')
const streamModels = require('../models/model')
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
      youtube:res.locals.streams2,
    })
  }

streamController.updateLike = (req, res) => {
  // console.log(req);
  // console.log(req.params.id);
    streamModels.updateLike({
      like: req.body.like,
      id: req.params.id

    })
      .then(update => {
        res.json({
          msg: 'ok',
          data: updateLike
        })
      })
  }





module.exports = streamController

//

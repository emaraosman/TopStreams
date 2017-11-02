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

streamController.getYouTubeApi = (req, res) => {
  res.json({
    message: 'ok',
    streams: res.locals.streams2,
  })
}

streamController.index = (req, res) => {
      res.render('index', {
        twitch: res.locals.streams,
        youtube: res.locals.streams2,
      })
}

streamController.updateLikes = (req, res) => {
  streamModels.updateLikes(req.body.streamer_id)
    .then(
      res.redirect('/')
    )
}

streamController.updateDislikes = (req, res) => {
  streamModels.updateDislikes(req.body.streamer_id)
    .then(update =>{
      res.json({
        msg:'ok',
        update: update
      })
    })
    .then(res.redirect('/'))

}


streamController.updateYLikes = (req, res) => {
  streamModels.updateYLikes(req.body.streamer_id)
    .then(
      res.redirect('/')
    )
}

streamController.updateYDislikes = (req, res) => {
  streamModels.updateYDislikes(req.body.streamer_id)
    .then(update =>{
      res.json({
        msg:'ok',
        update: update
      })
    })
    .then(res.redirect('/'))

}



module.exports = streamController

//

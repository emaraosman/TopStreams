//DONT FORGET TO require MODEL
const halpers = require('../halp.js')
const streamController = {};

streamController.getTwitchApi = (req, res) => {
  res.json({
    message: "ok",
    streams: res.locals.streams,
  })

}




module.exports = streamController

//

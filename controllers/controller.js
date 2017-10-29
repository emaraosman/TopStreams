//DONT FORGET TO require MODEL
const halpers = require('../halp.js')
const streamController = {};

streamController.getTwitchApi = (req, res) => {
  res.json({
    message: "ok",
    streams: res.locals.streams,
  })

}

streamController.index = (req, res) => {
  res.render('../views/index.ejs')
}




module.exports = streamController

//

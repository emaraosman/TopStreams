const express = require('express');
const streamRouter = express.Router();

const streamController = require('../controllers/controller.js');
const halpers = require('../halp.js')

streamRouter.get('/twitchdata', halpers.getTwitchApi, streamController.getTwitchApi);

streamRouter.get('/youtubedata', halpers.getYouTubeApi, streamController.getYouTubeApi)

streamRouter.get('/go', halpers.getTwitchApi, halpers.getYouTubeApi, streamController.index)




module.exports = streamRouter;

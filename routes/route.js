const express = require('express');
const streamRouter = express.Router();

const streamController = require('../controllers/controller.js');
const halpers = require('../halp.js')

streamRouter.get('/twitchdata', halpers.getTwitchApi, streamController.getTwitchApi);

streamRouter.get('/youtubedata', halpers.getYouTubeApi, streamController.getYouTubeApi)

streamRouter.get('/', halpers.getTwitchApi, halpers.getYouTubeApi, streamController.index)

streamRouter.put('/:id/likes', streamController.updateLikes);

streamRouter.put('/:id/dislikes', streamController.updateDislikes);

streamRouter.put('/:id/likes', streamController.updateYLikes);

streamRouter.put('/:id/dislikes', streamController.updateYDislikes);


module.exports = streamRouter;

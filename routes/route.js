const express = require('express');
const streamRouter = express.Router();

const streamController = require('../controllers/controller.js');
const halpers = require('../halp.js')

streamRouter.get('/', halpers.getTwitchApi, streamController.getTwitchApi);

streamRouter.get('/go', streamController.index)




module.exports = streamRouter;

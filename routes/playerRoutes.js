const express = require('express');
const playerController = require('./../Controllers/playerController');

const router = express.Router();

router
  .route('/')
  .get(playerController.getAllPlayers)
  .post(playerController.createPlayer);

module.exports = router;

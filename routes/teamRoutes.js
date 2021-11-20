const express = require('express');
const teamController = require('./../Controllers/teamController');

const router = express.Router();

router
  .route('/')
  .get(teamController.getAllTeams)
  .post(teamController.createTeam);

module.exports = router;

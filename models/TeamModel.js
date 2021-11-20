const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: [true, 'A team must have a name.'],
    trim: true,
  },
  teamShortName: {
    type: String,
    required: [true, 'A team must have a short name.'],
    trim: true,
  },
  teamFullName: {
    type: String,
    required: [true, 'A team must have a Full name.'],
    trim: true,
  },
  teamSymbol: {
    type: String,
    required: [true, 'A team must have a symbol.'],
  },
  matchesPlayed: {
    type: Number,
    default: 0,
  },
  matchesWon: {
    type: Number,
    default: 0,
  },
  matchesLost: {
    type: Number,
    default: 0,
  },
  matchesTied: {
    type: Number,
    default: 0,
  },
  matchesNoResult: {
    type: Number,
    default: 0,
  },
  champoinsTrophy: {
    type: Number,
    default: 0,
  },
  worldcup: {
    type: Number,
    default: 0,
  },
  ctYear: Number,
  wcYear: Number,
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;

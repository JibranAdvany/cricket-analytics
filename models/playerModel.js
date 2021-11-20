const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A player must have a name.'],
    trim: true,
  },
  scorecardName: {
    type: String,
    required: [true, 'A player must have a scorecard name.'],
    trim: true,
  },
  shortName: {
    type: String,
    required: [true, 'A player must have a short name.'],
    trim: true,
  },
  fullName: {
    type: String,
    required: [true, 'A player must have a full name.'],
    trim: true,
  },
  dateOfBirth: Date,
  birthCity: {
    type: String,
    default: 'Unknown',
  },
  birthCountry: {
    type: String,
    default: 'Unknown',
  },
  teams: [String],
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;

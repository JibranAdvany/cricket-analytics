const Player = require('./../models/playerModel');

// Create New Player
exports.createPlayer = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      scorecardName: req.body.scorecardName,
      shortName: req.body.shortName,
      fullName: req.body.fullName,
      dateOfBirth: req.body.dateOfBirth,
      birthCity: req.body.birthCity,
      birthCountry: req.body.birthCountry,
      teams: req.body.teams,
    };

    const player = await Player.create(data);

    res.status(201).json({
      status: 'success',
      data: {
        player,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid or incomplete data provided',
      error,
    });
  }
};

exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();

    res.status(200).json({
      status: 'success',
      records: players.length,
      data: {
        players,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message:
        'The resource you are looking for could not be found on the server.',
      error,
    });
  }
};

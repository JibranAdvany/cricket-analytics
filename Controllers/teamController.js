const Team = require('./../models/TeamModel');

exports.createTeam = async (req, res) => {
  try {
    const data = {
      teamName: req.body.teamName,
      teamShortName: req.body.teamShortName,
      teamFullName: req.body.teamFullName,
      teamSymbol: req.body.teamSymbol,
      matchesPlayed: req.body.matchesPlayed,
      matchesWon: req.body.matchesWon,
      matchesLost: req.body.matchesLost,
      matchesTied: req.body.matchesTied,
      matchesNoResult: req.body.matchesNoResult,
      champoinsTrophy: req.body.champoinsTrophy,
      worldcup: req.body.worldcup,
      ctYear: req.body.ctYear,
      wcYear: req.body.wcYear,
    };
    const team = await Team.create(data);

    res.status(201).json({
      status: 'success',
      data: {
        team,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid or incomplete data sent.',
      error,
    });
  }
};

exports.getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find();

    res.status(200).json({
      status: 'success',
      records: teams.length,
      data: {
        teams,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message:
        'The resource you are looking for does not exist on this server.',
      error,
    });
  }
};

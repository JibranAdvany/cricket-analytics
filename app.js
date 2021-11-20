const express = require('express');
const morgan = require('morgan');
const playerRouter = require('./routes/playerRoutes');
const teamRouter = require('./routes/teamRoutes');

// Instantiating the app
const app = express();

// Middleware

// Morgan
app.use(morgan('dev'));

// Body parser
app.use(express.json());

// Routes
app.use('/api/v1/players', playerRouter);
app.use('/api/v1/teams', teamRouter);

module.exports = app;

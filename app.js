const express = require('express');
const morgan = require('morgan');

// Instantiating the app
const app = express();

// Middleware - Morgan
app.use(morgan('dev'));

module.exports = app;

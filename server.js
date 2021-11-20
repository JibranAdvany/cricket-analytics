const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const app = require('./app');

// Connection to DB
const link = process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose.connect(link, () => {
  console.log('Databse connected');
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

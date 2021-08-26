const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_CONNECTION_STRING, {
	useNewUrlParser: true,
});

const db = mongoose.connection;

module.exports = db;

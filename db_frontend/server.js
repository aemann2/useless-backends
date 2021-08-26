const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/db');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('connected!');
});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log('App listening on port 3000!');
});

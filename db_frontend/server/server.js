const express = require('express');
const app = express();
const port = 3000;
// bringing in dotenv as early as possible
const dotenv = require('dotenv');
// telling dotenv where to find the config file with our variables
dotenv.config({ path: './config/config.env' });
const db = require('./config/db');
const Item = require('./models/item');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('connected!');
});

let item = new Item({
	name: 'Gravy',
	price: '1.30',
	stock: 20,
	sale: false,
	description: 'Good gravy',
});

item
	.save()
	.then((doc) => {
		console.log(doc);
	})
	.catch((err) => {
		console.log(err);
	});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log('App listening on port 3000!');
});

const express = require('express');
const dotenv = require('dotenv');

//Add Route files
const bootcamps = require('./routes/bootcamps');

//Load config file
dotenv.config({ path: './config/config.env' });

const app = new express();

//Mount Routes
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);

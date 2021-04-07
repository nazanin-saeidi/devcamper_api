const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

//Load config file
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();

//Add Route files
const bootcamps = require('./routes/bootcamps');

const app = new express();

//Mount Routes
app.use('/api/v1/bootcamps', bootcamps);

// DEV Logger middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('combined'));
}

const PORT = process.env.PORT || 5000;

const server = app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);

//Make a global handler for Promise Rejection, instead of using try-catch block for async await
//Handle unhandled rejection
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err.message}`);
	//Close Server and Exit process
	server.close(() => {
		process.exit(1);
	});
});

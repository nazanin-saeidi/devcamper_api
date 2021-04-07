const mongoose = require('mongoose');

const connectDB = async () => {
	// mongoose methods are gonna return Promises
	const conn = await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
        useUnifiedTopology: true
	});
	console.log(`MONGO DB is connected ${conn.connection.host}`);
};

module.exports = connectDB;

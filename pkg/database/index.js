const config = require("../config");
const mongoose = require("mongoose");

const { username, password, clusterName, databaseName } = config.getConfigPropertyValue("dbConfig");

const connectionString = `mongodb+srv://${username}:${password}@${clusterName}/${databaseName}?retryWrites=true`;

const connectToDB = async () => {
	try {
		await mongoose.connect(connectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log("Connected to mongo db");
	} catch (err) {
		console.error(err);
	}
};

module.exports = connectToDB;
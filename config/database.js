require('dotenv').config();
const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Succesfully connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB");
        process.exit(1);
    }
}

module.exports = connectToDatabase;

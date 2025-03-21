
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const connect = async () => {
  try {
    await mongoose.connect(process.env.ATLASDB_URL);
    console.log(" Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit on DB connection failure
  }
};

module.exports = connect;

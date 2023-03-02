const mongoose = require("mongoose");

const DB = process.env.DB.replace("<password>", process.env.PASSWORD);
const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("DB connection established".bgGreen.bold);
  } catch (error) {
    throw new Error(`DB: ${error.message}`.bgRed.bold);
  }
};

module.exports = connectDB;

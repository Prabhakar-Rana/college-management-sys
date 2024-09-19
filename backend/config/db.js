const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/collegeDB');  // Options removed
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    console.log("i am prabhakar and their is an errror !");
    process.exit(1);
  }
};

module.exports = connectDB;

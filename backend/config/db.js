const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://ranaabckqr:RanaPrabha%40123@collagecluster.e8ti4.mongodb.net/collegeDB');  // Options removed
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    console.log("i am prabhakar and their is an errror !");
    process.exit(1);
  }
};

module.exports = connectDB;

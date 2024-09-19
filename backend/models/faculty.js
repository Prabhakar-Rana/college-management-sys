const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: String,
  department: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});

module.exports = mongoose.model('Faculty', facultySchema);

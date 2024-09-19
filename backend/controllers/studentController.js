const Student = require('../models/student');

exports.getAllStudents = async (req, res) => {
  const students = await Student.find().populate('courses');
  res.json(students);
};

exports.addStudent = async (req, res) => {
  console.log("result="+req.body);
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.json(newStudent);
};

exports.getStudentById = async (req, res) => {
  const students = await Student.findById(req.params.id).populate('courses');
  res.json(students);
};


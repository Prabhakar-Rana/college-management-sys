const Faculty = require('../models/faculty');

exports.getAllFaculty = async (req, res) => {
  const faculty = await Faculty.find().populate('courses');
  res.json(faculty);
};

exports.addFaculty = async (req, res) => {
  const newFaculty = new Faculty(req.body);
  await newFaculty.save();
  res.json(newFaculty);
};

exports.getFacultyById = async (req, res) => {
  const faculty = await Faculty.findById(req.params.id).populate('courses');
  res.json(faculty);
};

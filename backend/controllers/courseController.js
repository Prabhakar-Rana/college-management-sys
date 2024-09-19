const Course = require('../models/course');

exports.getAllCourses = async (req, res) => {
  const courses = await Course.find().populate('faculty');
  res.json(courses);
};

exports.addCourse = async (req, res) => {
  const newCourse = new Course(req.body);
  await newCourse.save();
  res.json(newCourse);
};

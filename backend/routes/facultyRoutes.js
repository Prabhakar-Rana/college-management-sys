const express = require('express');
const { getAllFaculty, addFaculty, getFacultyById } = require('../controllers/facultyController');
const router = express.Router();

router.get('/', getAllFaculty);
router.get('/:id', getFacultyById);
router.post('/', addFaculty);

module.exports = router;

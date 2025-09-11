// server/routes/colleges.js
const express = require('express');
const router = express.Router();
const CollegeController = require('../controllers/collegeController');

// GET /api/colleges - Get all colleges with filters
router.get('/', CollegeController.getAllColleges);

// GET /api/colleges/filters - Get filter options
router.get('/filters', CollegeController.getFilterOptions);

// GET /api/colleges/:id - Get single college
router.get('/:id', CollegeController.getCollegeById);

// POST /api/colleges - Create new college (admin only)
router.post('/', CollegeController.createCollege);

module.exports = router;
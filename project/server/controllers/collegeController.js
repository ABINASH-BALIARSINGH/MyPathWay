// server/controllers/collegeController.js
const College = require('../models/College');

class CollegeController {
  static async getAllColleges(req, res) {
    try {
      const filters = {
        state: req.query.state,
        city: req.query.city,
        type: req.query.type,
        degree: req.query.degree,
        search: req.query.search,
        limit: req.query.limit
      };

      const colleges = await College.findAll(filters);
      res.json({
        success: true,
        data: colleges,
        count: colleges.length
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async getCollegeById(req, res) {
    try {
      const college = await College.findById(req.params.id);
      if (!college) {
        return res.status(404).json({
          success: false,
          message: 'College not found'
        });
      }

      res.json({
        success: true,
        data: college
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async getFilterOptions(req, res) {
    try {
      const options = await College.getFilterOptions();
      res.json({
        success: true,
        data: options
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async createCollege(req, res) {
    try {
      const collegeId = await College.create(req.body);
      const college = await College.findById(collegeId);
      
      res.status(201).json({
        success: true,
        data: college,
        message: 'College created successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = CollegeController;
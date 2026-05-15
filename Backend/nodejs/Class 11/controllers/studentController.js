const Student = require("../models/Student");

const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getStudents = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 5;

    const skip = (page - 1) * limit;

    let sort = {};

    if (req.query.sort) {
      const fields = req.query.sort.split(",");

      fields.forEach((field) => {
        if (field.startsWith("-")) {
          sort[field.substring(1)] = -1;
        } else {
          sort[field] = 1;
        }
      });
    } else {
      sort = { createdAt: -1 };
    }

    let filter = {};

    if (req.query.minAge || req.query.maxAge) {
      filter.age = {};

      if (req.query.minAge) {
        filter.age["$gte"] = Number(req.query.minAge);
      }

      if (req.query.maxAge) {
        filter.age["$lte"] = Number(req.query.maxAge);
      }
    }

    const students = await Student.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const totalStudents = await Student.countDocuments(filter);

    res.status(200).json({
      totalStudents,
      currentPage: page,
      totalPagess: Math.ceil(totalStudents / limit),
      students,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createStudent,
  getStudents,
};

const File = require("../models/File");

const cloudinary = require("../config/cloudinary");

// home page

const getHomePage = async (req, res) => {
  const files = await File.find().sort({
    createdAt: -1,
  });
  res.render("index", {
    files,
  });
};

// upload single file!

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No File uploaded!",
      });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "multerwithnodejs",
    });

    const savedFile = await File.create({
      fileName: req.file.originalname,
      public_id: result.public_id,
      imageURL: result.secure_url,
    });

    res.status(201).json({
      message: "file Uploaded!",
      savedFile,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// multiple files upload!

const uploadMultipleFiles = async (req, res) => {
  try {
    const uploadFiles = [];

    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "multerwithnodejs",
      });

      const savedFile = await File.create({
        fileName: file.originalname,
        public_id: result.public_id,
        imageURL: result.secure_url,
      });
      uploadFiles.push(savedFile);
    }

    res.status(201).json({
      message: "Multiple files uploaded!",
      uploadedFiles,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get

const getAllFiles = async (req, res) => {
  try {
    const files = await File.find().sort({
      createdAt: -1,
    });

    res.status(201).json(files);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// delete

const deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({
        message: "File not found!",
      });
    }

    // delete from cloudinary!

    await cloudinary.uploader.destroy(file.public_id);

    // delete from db

    await File.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "File Deleted!",
    });
  } catch (error) {
    res.status(500),
      json({
        message: error.message,
      });
  }
};

module.exports = {
  getHomePage,
  uploadFile,
  uploadMultipleFiles,
  getAllFiles,
  deleteFile,
};

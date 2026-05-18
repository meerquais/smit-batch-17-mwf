const express = require("express");

const router = express.Router();

const upload = require("../middleware/multer");

const {
  getHomePage,
  uploadFile,
  uploadMultipleFiles,
  getAllFiles,
  deleteFile,
} = require("../controllers/fileController");

router.get("/", getHomePage);

router.post("/upload", upload.single("image"), uploadFile);

router.post("/multiple", upload.array("image", 5), uploadMultipleFiles);

router.get("/files", getAllFiles);

router.delete("/delete/:id", deleteFile);

module.exports = router;

const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
    },
    public_id: {
      type: String,
    },
    imageURL: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", fileSchema);

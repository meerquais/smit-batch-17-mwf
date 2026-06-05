const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    sender:String,
    text:String
},{timestamps:true});

module.exports = mongoose.model("Messages",messageSchema)
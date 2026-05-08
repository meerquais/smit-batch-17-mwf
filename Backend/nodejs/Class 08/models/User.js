const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

module.exports = mongoose.model("Users" , userSchema);
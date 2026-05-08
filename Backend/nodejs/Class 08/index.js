const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const User = require("./models/User");

const app = express();
app.use(express.json());


connectDB();

// create user

app.post("/user" , async (req , res)=>{
    const user  = await User.create(req.body);
    res.json(user);
});

// get users

app.get("/users" , async (req,res)=>{
    const users = await User.find();
    res.json(users)
})

// update user

app.put("/users/:id" , async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id, req.body , {new:true});
    res.json(user);
})

// delete user

app.delete("/users/:id" , async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({
        message: "User Deleted"
    })
});


app.listen(5000)
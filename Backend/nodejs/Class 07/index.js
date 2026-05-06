// console.log("Test!");

// SQL example

// CREATE TABLE users(
//     name VARCHAR(50),
//     age INT
// )

// MongoDB

// db.users.insertOne({name:"meer"})
// db.users.insertOne({age:26})
// db.users.insertOne({name:"ahrar" , skills:["Js" , "node", "react"]})

// Collection  = table 
// Document = row

// db.users.insertOne({
//     name:"ahrar",
//     age:14,
//     skills:[],
//     address:{
//         city:"karachi",
//         zip:12345
//     }
// })

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin123@cluster0.c0f1yi2.mongodb.net/").then(
    ()=>{
        console.log("connected!");
        
    }
).catch(err => console.log(err)
)


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:18
    }
})

const User = mongoose.model("Users" , userSchema);

const user = new User({
    name:"Ahrar 2.0",
    age:18
})

user.save()

User.find().then(data => console.log(data)).catch(err => console.log(err))

// User.findOne({name:"Meer"}).then(user => console.log(user))
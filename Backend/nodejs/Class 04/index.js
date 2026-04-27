// console.log("Nodemon connected with node!");
const express = require("express");

const app = express();


// app.get("/",(req , res)=>{
//     res.send("<h1>Home Page</h1>")
// })
// app.get("/about",(req , res)=>{
//     res.send("<h1>About Page</h1>")
// })
// app.get("/contact",(req , res)=>{
//     res.send("<h1>Contact Page</h1>")
// })

// app.get("/dahi-bade" , (req,res)=>{
//     res.send("ye lo apkay dahi bade.")
// })
// app.get("/chole" , (req,res)=>{
//     res.send("ye lo apkay cholay!")
// })
// app.get("/pani-puri" , (req,res)=>{
//     res.send("ye lo apkay pani puri!")
// })

// dynamic route

// app.get("/product/:name" , (req, res)=>{
//     res.end(`Product: ${req.params.name}`);
// })

// query

// app.get("/order",(req,res)=>{
//     const item = req.query.item;
//     const qty = req.query.qty;


//     res.send(`Order : ${item} , Quantity : ${qty}`)
// })

// app.get("/api/data",(req,res)=>{
//     res.status(200)
//     .json({
//         name:"ali",
//         age:22
//     })
// })


// app.use((req,res)=>{
//     res.status(404).send("page not found")
// })

// let users = [];

// app.post("/users",(req,res)=>{
//     users.push(req.body);
//     res.json({
//         status:true,
//         message:"User added",
//         data:users
//     })
// })


// GET

// let users = [
//     {id:1 , name :"Meer"},
//     {id:2 , name:"Minhaj"}
// ];

// app.get("/users" , (req,res)=>{
//     res.json({
//         status:true,
//         data:users
//     })
// })

// POST 



app.use(express.json());


let users = [];

app.post("/users", (req,res)=>{
    const newUser ={
        id: users.length + 1,
        name: req.body.name
    };

    users.push(newUser);

    res.json({
        message:"User added!",
        data: newUser
    })
})



app.listen(5000,()=>{
    console.log("Server running on port 5000")
})

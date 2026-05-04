const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");


dotenv.config();

const app = express();


app.use(morgan("dev"));
app.use(express.json()); // ===> builtin JSON body parser

// // app.use((req,res,next)=>{
// //     console.log(req.method , req.url);
// //     next()
// // })


// app.get("/users/:username" , (req,res)=>{
//     console.log(req.params.username);
//     res.send("Request received!")
    
// })

// app.listen(5000)


// const PORT = 4000;
// const DBpassword = 123456789;




// PORT=5000
// DB_PASSWORD=abc123
// API_KEY=xyz123



app.get("/" , (req,res)=>{
    res.send("Requested has been recieved!")
})


app.listen(process.env.PORT);
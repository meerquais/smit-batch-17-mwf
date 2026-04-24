// const http = require("http");

// const server = http.createServer((req, res)=>{
//     const pathName = req.url

//     if(pathName === "/" || pathName === "/overview"){
//         res.end("<h2>This is the Overview Page!</h2>")
//     }else if(pathName === "/product"){
//         res.end("This is the product!");
//     }else{
//         res.writeHead(404,{
//             'content-type' : "text/html",
//             "my-own-header" : "hello-world!"
//         })
//         res.end("<h1>Page Not Found!</h1>")
//     }


//     // console.log("Hello! this is from the server!");   
//     // res.end("<h1>Hello! This is from the server!</h1>") 
// })

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("Server is Running on port 8000!");
    
// })


// export 

// module.exports = something 


// import

// const something = requre("./file1.js");


// const math = require("./file1");


// console.log(math.add(44,56));
// console.log(math.add(4,5));
// console.log(math.add(4,6));
// console.log(math.sub(99,20));

// const http = require("http");

// const server = http.createServer((req , res)=>{
//     if(req.url === "/"){
//         res.end("This is home")
//     }else if (req.url === '/about'){
//         res.end("this is about")
//     }else{
//         res.end("404")
//     }
// })

// server.listen(8000)

// express

const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("Hello ExpressJs")
})

app.listen(8000, ()=>{
    console.log("Server running!");
    
})
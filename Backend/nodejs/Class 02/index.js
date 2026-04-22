// const user = "Meer Quais";


// console.log(user);


const { log } = require("console");
const fs = require("fs");

// const data = fs.writeFileSync("./text.txt" , "This file was created using nodejs");

// console.log(data);

// console.log("Next Line");

// const data = fs.readFileSync("./text.txt" , 'utf-8');

// console.log(data);
// console.log("Next Line");


// const data = fs.readFile('./text.txt' , 'utf-8' , (err , data)=>{

//         console.log(data);
//         console.log(err);        
// })

// console.log("Next Line");

// fs.writeFile("./text.txt" , "This was overwritten using nodejs" , (err, data)=>{
//     if(data){
//         console.log(data);
        
//     }else{
//         console.log(err);
//     }
    
// })

// console.log("Next Line");


// const data = fs.appendFile("./text.txt" , " This is appended using node.js",(err, data)=>{
//     console.log(err);
//     console.log(data);
// });

// const textIn = fs.readFileSync("./ahrar.txt" , 'utf-8');
// console.log(textIn);


// const textOut = `This is what we know about the avocado: ${textIn}.\n Created on${Date.now()}`;

// fs.writeFileSync('./output.txt', textOut);
// console.log("file written");

// GET /posts

// 200 OK 
// Hello World!


const http = require("http");

// const server = http.createServer((req , res)=>{
//     res.end("<h1>Hello From Server 5000!</h1>");
// })


// server.listen(5000,"127.0.0.1", ()=>{
//     console.log("Server is running!!");
    
// })

const server = http.createServer((req , res)=>{
    if(req.url === "/"){
        res.end("<h1>Home Page</h1>")
    }else if(req.url === "/about"){
        res.end("<h1>About Page</h1>")
    }else if(req.url === "/contact"){
         res.end("<h1>Contact Page</h1>")
    }else{
        res.end("Not Found!");
    }
})

server.listen(5000,"127.0.0.1", ()=>{
    console.log("Server is running!!");
    
})






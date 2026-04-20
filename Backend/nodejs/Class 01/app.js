// const name = "Meer Quais";
// console.log(name);



const fs = require("fs");

// const file = fs.readFileSync("./text.txt" , 'utf-8');
// const file = fs.readFileSync("./text.txt" , 'utf-8', (err, data)=>{
//         console.log(data);        
// } );

// console.log("next line");




// const file = fs.readFile("./text.txt" , 'utf-8', (err, data)=>{
//         console.log(data);        
// } );

// console.log("next line");

// fs.writeFileSync("./text.txt", "This is a test to see if it's overwritten or appended");

fs.writeFileSync("./app.txt" , "This file was created using Nodejs");


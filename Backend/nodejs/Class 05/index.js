console.log("Nodejs");


const express = require("express");

const app = express();

app.use(express.json());



// app.get("/" , (req,res)=>{
//     res.send("Backend kaam kar raha hai!")
//     console.log("Backend running! on route / ");
    
// })

// const users = [];

// app.post("/users" , (req, res)=>{
    
//     const user = req.body
    
//     console.log(user);
//     res.send("User Registered!")

    
// })

// POST

// let users = [];


// app.post("/users" , (req, res)=>{
//     const newUser= {
//         id: users.length + 1,
//         name : req.body.name,
//         age:  req.body.age,
//         email: req.body.email
//     };

//     users.push(newUser);

//     res.status(201).json({
//         message: "User created!",
//         data: newUser
//     })


// })


// UPDATE ===> PUT


// let users = [
//     {id:1,name:"Ahrar"}
// ]


// app.put("/users/:id", (req,res)=>{
//     const user = users.find(u => u.id == req.params.id);

//     if(!user){
//         return res.status(403).send("User not found!")
//     }

//     user.name = req.body.name;

//     res.json({
//         message:"User Updated",
//         data:user
//     })
// })


// let users = [
//     {id:1,name:"ahrar"},
//     {id:2,name:"farman"}
// ]


// app.delete("/users/:id",(req,res)=>{
//     const id = req.params.id;

//     users = users.filter(u => u.id != id);
//     res.json({
//         message:"User Deleted!"
//     })
//     console.log(users);
    
// })


// app.get("/",(req,res)=>{
//     res.json({
//         name:"Ali",
//         age:20
//     });
// });



// middleware structure

// (req,res,next)=>{} 


// app.use((req,res,next)=>{
//     console.log("Middleware hit!");  
//     next() 
// })
// app.get("/",(req,res)=>{
//     res.send("Test")
// })


// app.use((req,res,next)=>{
//     console.log("Har Request yahan se guzregi");
//     next()    
// })
// app.get("/" , (req,res)=>{
//     res.send("<h1>Home Page</h1>")
// })

// app.use((req,res,next)=>{
//     console.log("Middleware 1");
//     next();    
// })
// app.use((req,res,next)=>{
//     console.log("Middleware 2");
//     next();    
// })
// app.use((req,res,next)=>{
//     console.log("Middleware 3");
//     next();    
// })
// app.get("/",(req,res)=>{
//     res.send("Final Response!")
    
// })


// app.get("/", (req,res,next)=>{

// })



// const checkAuth = (req, res, next)=>{
//     const isLoggedIn = false;

//     if(!isLoggedIn){
//         return res.send("Not Allowed!");
//     }


//     next()
// }

// app.get("/dashboard", checkAuth , (req,res)=>{
//     res.send("Welcome to Dashboard!")
// })


// app.use((req,res,next)=>{
//     if(req.url === "/blocked"){
//         return res.send("access Denied!");
//     }
//     next()
// })



// logger 

app.use((req,res,next)=>{
    console.log("Request Received");
    next()    
})

// auth middleware

const auth = (req,res,next)=>{
    const token = true;

    if(!token){
        return res.status(401).json({
            message:"Unauthorized!"
        })
    };
    next()
}

app.get("/" , (req,res)=>{
    res.send("Public Route!")
})

app.get("/private" , auth , (req,res)=>{
    res.send("Private Route accessed!")
})






app.listen(4000)






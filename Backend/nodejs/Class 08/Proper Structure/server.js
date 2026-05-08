const app = require("./index")
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

connectDB();

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const loginController = async(req,res)=>{
    try {
        const {email , password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message:"User not found"
            })
        };

        const isMatch = await bcrypt.compare(password,user.password);


        if(!isMatch){
            return res.status(402).json({
                message:"invalid credentials"
            })
        };

        const token  = jwt.sign({id:user._id} , process.env.JWT_SECRET , {expiresIn:"1d"});

        res.json({
            success:true,
            token,
            user
        })

       

        



    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};

module.exports = loginController;
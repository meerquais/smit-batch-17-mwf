const User = require("../../models/User");
const bcrypt = require("bcryptjs");

const registerController = async(req,res)=>{
    try {
        const {username , email , password} = req.body;

        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({
                message:"User already exists!"
            })
        };

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password:hashedPassword
        });

        res.status(200).json({
            success:true,
            user
        })



    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};

module.exports = registerController;
const jwt = require("jsonwebtoken");


const authMiddleware = (req,res,next)=>{

    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({
            message:"No token found!"
        })
    };

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next()
    } catch (error) {
        res.status(401).json({
            message:"invalid token"
        })
    }

}

module.exports = authMiddleware;
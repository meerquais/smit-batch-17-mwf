const userServices = require("../services/user.services");

const createUser = async(req,res)=>{
    const user = await userServices.createUser(req.body)
    res.json(user)
}

const getUsers = async(req,res)=>{
    const users = await userServices.getUsers()
    res.json(users)
}

const getUserById = async(req,res)=>{
    const user = await userServices.getUserById(req.params.id)
    res.json(user)
}

const updateUser = async(req,res)=>{
    const user = await userServices.updateUser(req.params.id , req.body)
    res.json(user)
}

const deleteUser = async(req,res)=>{
    const user = await userServices.deleteUser(req.params.id)
    res.json({
        message:"User has been deleted!"
    })
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}
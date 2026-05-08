const User = require("../models/user.model");


const createUser = async(data)=>{
    return await User.create(data)
}

const getUsers = async()=>{
    return await User.find()
}

const getUserById = async(id)=>{
    return await User.findById(id)
}

const updateUser = async(id, data)=>{
    return await User.findByIdAndUpdate(id,data , {new:true})
}

const deleteUser = async(id)=>{
    return await User.findByIdAndDelete
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}
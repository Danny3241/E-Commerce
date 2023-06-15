const UserLogin = require('../models/userLogin')

const register = async (user) => {
    return await UserLogin.create(user)
}

const getRegister = async (user) => {
    return await UserLogin.findOne(user)
}

const signIn = async(user)=>{
    return await UserLogin.findOne(user)
}



module.exports = {
    register,
    getRegister,
    signIn
}
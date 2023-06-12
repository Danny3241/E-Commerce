const UserLogin = require('../models/userLogin')

const register = async (user) => {
    console.log(user)
    return await UserLogin.create(user)
}
const signIn = async(user)=>{
    return await UserLogin.findOne(user)
}



module.exports = {
    register,
    signIn
}
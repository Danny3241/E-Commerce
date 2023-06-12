const UserLogin = require('../models/userLogin')

const getUserLogin = async(user)=>{
    return await User.findOne(user)
}



module.exports = {
    getUserLogin
}
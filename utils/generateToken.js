const jwt = require ('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, 'asdfghjklzsdxfghjkaSdfghjSzdxfghSzdxfghjsdfgh', {
        expiresIn: '1d',
    });
};



module.exports =  generateToken;
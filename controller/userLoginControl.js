const userLoginService = require('../service/userLoginService');

const register = async (req, res) => {
    try {
        const userLogin = await userLoginService.register({
            email: req.body.email,
            password: req.body.password
        })
        res.json({ data: userLogin, status: 'success' })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const signIn = async (req, res) => {
    try {
        const userLogin = await userLoginService.signIn({ email: req.body.email })
        const compare = await userLogin.comparePassword(req.body.password, userLogin.password);

        if (compare) {
            res.status(200).json({ data: "successfully login" })
        }
        else {
            res.status(200).json({ data: "login fail" })
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}



module.exports = {
    register,
    signIn
}    
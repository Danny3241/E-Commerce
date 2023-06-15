const userLoginService = require('../service/userLoginService');

const register = async (req, res) => {
    try {
        const userLogin = await userLoginService.register({
            email: req.body.email,
            password: req.body.password
        });

        if (!(userLogin.email && userLogin.password)) {
            return res.status(400).send("All input is required");
        }

        const oldUser = await userLoginService.getRegister({ email: userLogin.email });

        if (oldUser) {
            return res.status(409).send("User Already Exists. Please Login");
        }

        res.json({ data: userLogin, status: 'success' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const signIn = async (req, res) => {
    try {
        const userLogin = await userLoginService.signIn({ email: req.body.email })
        const compare = await userLogin.comparePassword(req.body.password, userLogin.password);
        if (!(userLogin.email && userLogin.password)) {
            res.status(400).send("All input is required");
        }
        const user = await userLoginService.getRegister({ email: userLogin.email });
        if (user, compare) {
            res.status(200).send("user successfully login")
        } else {
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
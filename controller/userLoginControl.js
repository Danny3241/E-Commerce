const userLoginService = require('../service/userLoginService');

const register = async (req, res) => {
    try {
        const {email, password } = req.body;

        if (!(email && password)) {
            return res.status(400).send("All input is required");
        }

        const oldUser = await userLoginService.getRegister({ email });

        if (oldUser) {
            return res.status(409).send("User Already Exists. Please Login");
        }

        const newUser = await userLoginService.register({ email, password });
        res.json({ data: newUser, status: 'success' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const signIn = async (req, res) => {
    try {
        const {email, password } = req.body;
        const userLogin = await userLoginService.signIn({ email })
        const compare = await userLogin.comparePassword(password, userLogin.password);

        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        const user = await userLoginService.getRegister({ email: userLogin.email });

        if (user &&  compare) {
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
const userService = require('../service/userService');

const createUser = async (req, res) => {
    try {
        console.log(req.file)
        const user = await userService.createUser({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
            street: req.body.street,
            apartment: req.body.apartment,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
        })
        res.json({ data: user, status: 'success' })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const signIn = async (req, res) => {
    try {
        // console.log(email, password);
        // const password = req.body.password;
        const user = await userService.getUser({ email: req.body.email })
        const compare = await user.comparePassword(req.body.password, user.password);

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

const getAllUser = async (req, res) => {
    try {
        const user = await userService.getAllUser()
        res.json({ data: user, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id)
        res.json({ data: user, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body)
        res.json({ data: user, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id)
        res.json({ data: user, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



module.exports = {
    createUser,
    signIn,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
}
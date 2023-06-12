const userService = require('../service/userService');

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser({
            userLogin: req.body.userLogin,
            name: req.body.name,
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
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
}
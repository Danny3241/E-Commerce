const propertyService = require('../service/propertyService');

const createProperty = async (req, res) => {
    try {
        console.log(req.file)
        const property = await propertyService.createProperty({
            propertyName: req.body.propertyName,
            description: req.body.description,
            email: req.body.email,
            password: req.body.password,
            photo: req.file.filename,
        })
        res.json({ data: property, status: 'success' })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const signIn = async (req, res) =>{
try{
    const user = await propertyService.getUser(req.body.email)
     
if(user){
    if(user.password === req.body.password){
}
}
}
catch(err){
    res.status(500).json({ error: err.message });
}
}

const getAllProperty = async (req, res) => {
    try {
        const property = await propertyService.getAllProperty()
        res.json({ data: property, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getPropertyById = async (req, res) => {
    try {
        const property = await propertyService.getPropertyById(req.params.id)
        res.json({ data: property, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const updateProperty = async (req, res) => {
    try {
        const property = await propertyService.updateProperty(req.params.id, req.body)
        res.json({ data: property, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteProperty = async (req, res) => {
    try {
        const property = await propertyService.updateProperty(req.params.id)
        res.json({ data: property, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



module.exports = {
    createProperty,
    signIn,
    getAllProperty,
    getPropertyById,
    updateProperty,
    deleteProperty
}
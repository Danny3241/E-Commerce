const categoryService = require('../service/categoryService');

const createCategory = async (req, res) => {
    try {
        // console.log(req.file.filename)
        console.log(req.body)
        const category = await categoryService.createCategory({
            name: req.body.name,
            icon: req.file.filename,
            color: req.body.color
        })
        res.json({ data: category, status: 'success' })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getAllCategory = async (req, res) => {
    try {
        const category = await categoryService.getAllCategory()
        res.json({ data: category, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getCategoryById = async (req, res) => {
    try {
        const category = await categoryService.getCategoryById(req.params.id)
        res.json({ data: category, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const updateCategory = async (req, res) => {
    try {
        const category = await categoryService.updateCategory(req.params.id, req.body)
        res.json({ data: category, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteCategory = async (req, res) => {
    try {
        const category = await categoryService.deleteCategory(req.params.id)
        res.json({ data: category, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



module.exports = {
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
}
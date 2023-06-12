const productService = require('../service/productService');

const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct({
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            // image: req.file.filename,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured
        })
        res.json({ data: product, status: 'success' })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getAllProduct = async (req, res) => {
    try {
        const product = await productService.getAllProduct()
        res.json({ data: product, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id)
        res.json({ data: product, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await productService.updateProduct(req.params.id, req.body)
        res.json({ data: product, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await productService.deleteProduct(req.params.id)
        res.json({ data: product, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



module.exports = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct
}
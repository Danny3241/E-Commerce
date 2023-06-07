const productService = require('../service/productService');

const createProduct = async (req, res) => {
    try {
        console.log(req.file)
        const product = await productService.createProduct({
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            country: req.body.country,
            isFeatured: req.body.isFeatured
        })
        res.json({ data: product, status: 'success' })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getAllProduct = async (req, res) => {
    try {
        const user = await productService.getAllProduct()
        res.json({ data: user, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getProductById = async (req, res) => {
    try {
        const user = await productService.getProductById(req.params.id)
        res.json({ data: user, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const user = await productService.updateProduct(req.params.id, req.body)
        res.json({ data: user, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const user = await productService.deleteProduct(req.params.id)
        res.json({ data: user, status: 'success' })
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
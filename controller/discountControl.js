const discountService = require('../service/discountService');

const createDiscount = async (req, res) => {
    try {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < 8) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }

        const discount = await discountService.createDiscount({
            coupon_code : result,
            discount_rate: req.body.discount_rate,
            expire: req.body.expire
        })
        res.json({ data: discount, status: 'success' })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
const getDiscountById = async (req, res) => {
    try {
        const discount = await discountService.getDiscountById(req.params.id, req.body)
        res.json({ data: discount, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const updateDiscount = async (req, res) => {
    try {
        const discount = await discountService.updateDiscount(req.params.id, req.body)
        res.json({ data: discount, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    createDiscount,
    updateDiscount,
    getDiscountById
}
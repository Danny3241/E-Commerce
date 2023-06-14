const Discount = require('../models/discount')

const createDiscount= async (discount) => {
    return await Discount.create(discount)
}

const getDiscountById= async (id) => {
    console.log(id)
    return await Discount.findById(id)
}

const updateDiscount = async (id, discount) => {
    return await Discount.findByIdAndUpdate(id, discount)
}



module.exports = {
    createDiscount,
    getDiscountById,
    updateDiscount
}
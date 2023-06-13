const Discount = require('../models/discount')

const createDiscount= async (discount) => {
    return await Discount.create(discount)
}

const updateDiscount = async (id, discount) => {
    return await Discount.findByIdAndUpdate(id, discount)
}



module.exports = {
    createDiscount,
    updateDiscount
}
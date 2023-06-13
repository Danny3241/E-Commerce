const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discountSchema = new Schema({
    coupon_code :{
        type:String,
        required:true,
    },
    discount_rate:{
        type:Number,
        required:true
    },
    expire:{
        type:Date,
        required:true
    }
})



module.exports = mongoose.model("Discount", discountSchema);


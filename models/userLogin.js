const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs")

const userLoginSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})



userLoginSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    next();
});

//~Compare Password
userLoginSchema.methods.comparePassword = async function (dbPassword, userPassword) {
    return await bcrypt.compare(dbPassword, userPassword);
};



module.exports = mongoose.model("UserLogin", userLoginSchema);

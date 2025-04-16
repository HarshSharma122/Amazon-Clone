const mongoose = require('mongoose');
const addressSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    postalCode: Number,
    country: String,
    phone: Number,
})
module.exports = mongoose.model("Address", addressSchema);
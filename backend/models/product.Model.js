const mongoose = require('mongoose');
const schema = mongoose.Schema({
    product_name:String,
    price:String,
    quantity:String,
    description:String,
});

module.exports =  mongoose.model("ProductDetails", schema);

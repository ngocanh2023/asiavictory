const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    selectedValue: {type: String,}, 
    image: {type: String,},
    title: {type: String},
    content: {type: String,},
    time: {type: String},

})
module.exports = mongoose.model("Product", productSchema)


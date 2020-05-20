const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
    {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        img: { data: Buffer, contentType: String},
        price: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('products', Product)
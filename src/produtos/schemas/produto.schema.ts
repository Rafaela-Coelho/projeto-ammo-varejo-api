import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    tablePrice: Number,
    salePrice: Number,
    urlImage1: String,
    urlImage2: String,
    urlImage3: String,
    urlImage4: String
});
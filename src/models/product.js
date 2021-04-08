'use strict';

const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const ProductSchema = Schema({
    title:          String,
    description:    String,
    options:        [String],
    image:          String,
    shop:           { type: Schema.ObjectId, ref: 'Shop' }
});

module.exports = mongoose.model('Product', ProductSchema);
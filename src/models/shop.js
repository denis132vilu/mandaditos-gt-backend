'use strict';

const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const ShopSchema = Schema({
    comercialName:  String,
    country:        String,
    city:           String,
    website:        String,
    image:          String,
    tags:           [String],
});

module.exports = mongoose.model('Shop', ShopSchema);
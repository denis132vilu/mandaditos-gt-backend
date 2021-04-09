'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComboSchema = Schema({
    title:          String,
    description:    String,
    products:       [String],
    options:        [String],
    image:          String,
    shop:           { type: Schema.Types.ObjectId, ref: 'Shop' },
});

module.exports = mongoose.model('Combo', ComboSchema);
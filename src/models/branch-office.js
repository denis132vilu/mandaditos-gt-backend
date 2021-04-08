'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BranchOfficeSchema = Schema({
    socialReason: String,
    phoneNumber: String,
    address: String,
    zone: String,
    longitude: String,
    latitude: String,
    nit: String,
    qualification: Number,
    shop: { type: Schema.ObjectId, ref: 'Shop' },
});

module.exports = mongoose.model('BranchOffice', BranchOfficeSchema);
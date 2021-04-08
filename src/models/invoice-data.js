'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserInvoiceDataSchema = Schema({
    completeName:   String,
    address:        String,
    nit:            String,
    user:           { type: Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('UserInvoiceData', UserInvoiceDataSchema);
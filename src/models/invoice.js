'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvoiceSchema = Schema({
    authorizationNumber: String,
    serialNumber: String,
    invoiceNumber: String,
    name: String,
    address: String,
    date: Date,
    nit: String,
    detail: [{
        quantity: Number,
        type: String,
        description: String,
        subTotal: Number
    }],
    discount: Number,
    total: Number,
    order: { type: Schema.ObjectId, ref: 'Order' }
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
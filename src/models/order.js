'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = Schema({
    address: String,
    detail: [{
        product: { type: Schema.ObjectId, ref: "Product" },
        quantity: Number,
        subtotal: Number,
        options: [String],
        comment: String
    }],
    date: Date,
    branchOffice: { type: Schema.ObjectId, ref: "BranchOffice" },
    total: Number,
    discounts: Number,
    latitude: String,
    longitude: String,
    user: { type: Schema.ObjectId, ref: "BranchOffice" },
    status: Number
});

module.exports = mongoose.model("Order", OrderSchema);
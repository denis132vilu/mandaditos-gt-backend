'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = Schema({
    address: String,
    detail: [{
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: Number,
        subtotal: Number,
        options: [String],
        comment: String
    }],
    date: Date,
    branchOffice: { type: Schema.Types.ObjectId, ref: "BranchOffice" },
    total: Number,
    discounts: Number,
    latitude: String,
    longitude: String,
    user: { type: Schema.Types.ObjectId, ref: "BranchOffice" },
    status: Number
});

module.exports = mongoose.model("Order", OrderSchema);
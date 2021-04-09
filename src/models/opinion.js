'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OpinionSchema = Schema({
    opinionType: String,
    comment: String,
    date: Date,
    branchOffice: { type: Schema.Types.ObjectId, ref: 'BranchOffice' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    order: { type: Schema.Types.ObjectId, ref: 'Order' },
});

module.exports = mongoose.model('Opinion', OpinionSchema);
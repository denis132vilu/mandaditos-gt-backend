'use strict';

const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const UserSchema = Schema({
    name:           String,
    lastname:       String,
    email:          String,
    password:       String,
    phoneNumber:    String,
    country:        String,
    postalCode:     String,
    address:        String,
    nit:            String,
    role:           Number,
    image:          String,
});

module.exports = mongoose.model('User', UserSchema);
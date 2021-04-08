'use strict';

const jwt           = require('jsonwebtoken');
const moment        = require('moment');
const { secrets }   = require('../config/config');

exports.createToken = id => {
    let payload = {
        sub: id,
        iat: moment().unix(),
        exp: moment().add(15, 'days').unix(),
    };

    return jwt.sign(payload, secrets.jwtSecret);
}
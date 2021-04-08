'use strict';

var { decode }              = require('jwt-simple');
var moment                  = require('moment');
const { secrets }           = require('../config/config');
const { decryptWithAES }    = require('../services/encryption');

/**
 * Ensure that the user is authenticated through JWT
 * @param {any} req Request body with all data
 * @param {any} res Request object to return a result
 * @param {void} next Method that will be executed
 */
exports.ensureAuth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(404).send({ message: 'La petición no tiene la cabecera de autenticación' });
    }

    let decryptedToken = decryptWithAES(req.headers.authorization);

    let token = decryptedToken.replace(/['"]+/g, '');
    try {
        var payload = decode(token, secrets.jwtSecret);
        if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: 'El token ha expirado', logout: true });
        }
    } catch (ex) {
        return res.status(404).send({ message: 'El token no es válido', logout: true });
    }
    req.user = payload;
    next();
};
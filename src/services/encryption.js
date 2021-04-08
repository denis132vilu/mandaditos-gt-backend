'use strict';

const AES           = require('crypto-js/aes')
const Utf8          = require('crypto-js/enc-utf8');
const { secrets }   = require('../config/config');

/**
 * Encrypt data with AES schema
 * @param {string} text text to be encrypted
 * @param {string} secret secret text needet to encrypt text
 * @returns ciphertext as string
 */
const encryptWithAES = text => AES.encrypt(text, secrets.encryptionSecret).toString();

/**
 * Decrypt data with AES schema
 * @param {string} ciphertext encrypted text
 * @returns decrypted data as string
 */
const decryptWithAES = ciphertext => {
    const bytes = AES.decrypt(ciphertext, secrets.encryptionSecret);
    return bytes.toString(Utf8);
}

module.exports = {
    encryptWithAES,
    decryptWithAES,
}
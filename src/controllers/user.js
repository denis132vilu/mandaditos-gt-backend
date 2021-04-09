'use strict';

const User = require('../models/user');
const jwt = require('../services/jwt');
const { encryptWithAES } = require('../services/encryption');
const { hashField, compareWithHashed, } = require('../services/bcrypt');
const { USER_ROLES } = require('../enums/user');

const createDefaultUsers = async () => {
    try {
        var foundUsers = await User.findOne({ role: USER_ROLES.SUPERADMIN }).select({ _id: 1 }).exec();
        if (foundUsers) return;

        let user = new User();
        user.name = 'Black';
        user.lastname = 'Rulis';
        user.email = 'byraul0209@gmail.com';
        user.password = await hashField('sadmin@blackrulis');
        user.phoneNumber = '+50246450002';
        user.country = 'Guatemala';
        user.postalCode = '01003';
        user.address = '4ta. Avenida 28-48, zona 3';
        user.nit = '106054694';
        user.role = USER_ROLES.SUPERADMIN;
        await user.save();

        let user2 = new User();
        user2.name = 'Denis';
        user2.lastname = 'Villagrán';
        user2.email = 'denisvillagran99@gmail.com';
        user2.password = await hashField('sadmin@edmon_kirsch');
        user2.phoneNumber = '+50254639374';
        user2.country = 'Guatemala';
        user2.postalCode = '01007';
        user2.address = '13 av. "B" 33-33, zona 7 Banvi 1, Bethania';
        user2.nit = '109781953';
        user2.role = USER_ROLES.SUPERADMIN;
        await user2.save();

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createDefaultUsers,
};
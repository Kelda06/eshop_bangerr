const mongoose = require("mongoose");
const User = require('../models/user.model');

const bcrypt = require('bcrypt');
const saltRounds = 10;

function hashPassword(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (error, hashedPassword) => {
            if (error) {
                reject(new Error('Chyba pri hashovaní hesla'));
            } else {
                resolve(hashedPassword);
            }
        });
    });
}

function comparePasswords(plainPassword, hashedPassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainPassword, hashedPassword, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

function generateString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
    }

    return randomString;
}

function getUserID(authToken, callback) {
    User.findOne({ auth: authToken })
    .then(foundUser => {
        callback(foundUser._id)
    })
    .catch(err => {
        callback(null);
    })
}

function isManager(authToken, callback) {
    User.findOne({ auth: authToken })
    .then(foundUser => {
        if (foundUser.role == "manager" || foundUser.role == "admin") callback(true);
        else callback(false); 
    }).catch(err => {
        callback(false);
    });
}
module.exports = {
    hashPassword,
    comparePasswords,
    generateString,
    getUserID,
    isManager
}
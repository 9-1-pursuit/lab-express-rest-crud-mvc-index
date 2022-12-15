const express = require('express')
const loactions = express.Router()
const loactionsArray = require('../models/location.model')

loactions.get('/', (req, res) => {
    res.json(loactionsArray);
});

module.exports = loactions;
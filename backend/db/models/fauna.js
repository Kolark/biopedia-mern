const mongoose = require('mongoose')
const faunaSchema = require('../schemas/fauna')
const faunaModel = new mongoose.model('Fauna',faunaSchema);

module.exports = faunaModel;
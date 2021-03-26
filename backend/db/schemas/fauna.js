const mongoose = require('mongoose');

const faunaSchema = new mongoose.Schema({
    vernacularName:{
        type:String,
        trim:true,
        required:true
    },
    scientificName:{
        type:String,
        trim:true,
        required:true
    },
    family:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

module.exports = faunaSchema;
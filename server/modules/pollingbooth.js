const mongoose = require('../config/db');

const pollingboothschema = new mongoose.Schema({
    pollingboothnumber: {
        type: Number,
        trim: true,
        unique:true
    },
    pollingboothname: {
        type: String,
        trim: true,
        lowercase: true
    },
    parentconstituency: {
        type: String,
        trim: true,
        lowercase: true
    },
    winner: {
        type: String,
        trim: true,
        lowercase: true
    },
    firstrunnerup: {
        type: String,
        trim: true,
        lowercase: true
    },
    marginpercentage: {
        type: Number,
        trim: true
    },
    margine: {
        type: Number,
        trim: true
    },
    totalvoters: {
        type: Number,
        trim: true
    },
    bjpvotes: {
        type: Number,
        trim: true
    },
    bjpvotespercentage: {
        type: Number,
        trim: true
    },
    incvotes: {
        type: Number,
        trim: true
    },
    incvotespercentage: {
        type: Number,
        trim: true
    }
},{timestamps:true})

const pollingbooth = mongoose.model('pollingbooth2014', pollingboothschema);

module.exports = pollingbooth;
const mongoose = require('../config/db');
const jwt = require('jsonwebtoken');

const userloginschema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true
        
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    username: {
        type: String,
        trim: true,
        lowercase: true
    },
    phone: {
        type: Number,
        trim: true

    },
    role: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        trim: true
    },

    tokens: [
        {
            token: {
                type: String

            }
        }
    ]
}, { timestamps: true })

userloginschema.methods.generatetoken = async function () {
    const token = await jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY)
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;

}



const models = mongoose.model('uselogindetails', userloginschema);

module.exports = models;
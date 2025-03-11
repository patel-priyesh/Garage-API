const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const customer = new Schema({
    username: {
        type: String,
        required:true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    contactno: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }
})
const CUSTOMER = mongoose.model('customer', customer)
module.exports = CUSTOMER
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const shopkeeper = new Schema({
    username: {
        type: String,
        required:true
    },
    email: {
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
    password:{
        type:String,
        required:true

    },
    confirmpassword:{
        type:String,
        required:true
    }
})
const SHOPKEEPER = mongoose.model('shopkeeper', shopkeeper)
module.exports = SHOPKEEPER
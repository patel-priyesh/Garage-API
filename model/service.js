const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const service = new Schema({
    vehiclename: {
        type: String,
        required:true
    },
    vehilceno:{
        type : String,
        required : true
    },
    vehicletype:{
        type: String,
        required:true
    },
    compnyname: {
        type: String,
        required:true
    },
    model: {        
        type: String,
        required:true
    },
    year: {
        type: String,
        required: true
    },
    appointment : {
        type : String,
        required : true,
        enum : ["pending","approve","reject","cancel"],
        default : "pending"
    },
    customerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    }
})
const SERVICE = mongoose.model('service', service)
module.exports = SERVICE
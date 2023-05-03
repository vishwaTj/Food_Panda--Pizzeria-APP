const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

// the mongoose model helps us achieve CRUD operations else
// you can directly upload values without any rules to mongoDB atlas API
module.exports = mongoose.model('user',OrderSchema);
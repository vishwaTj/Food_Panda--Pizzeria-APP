const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    order_data: {
       type: Array,
       required:true
    },
});

// the mongoose model helps us achieve CRUD operations else
// you can directly upload values without any rules to mongoDB atlas API
const Order= mongoose.model('Order',OrderSchema);

module.exports = Order;
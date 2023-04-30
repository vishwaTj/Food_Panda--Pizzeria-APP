const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://FoodPanda:XfcBAQX4d0WEd86T@cluster0.klyxuv6.mongodb.net/foodPandaMERN?retryWrites=true&w=majority';
const mongoDB = async ()=>{
    await mongoose.connect(mongoURI,{ useNewUrlParser: true });
}


module.exports = mongoDB;





const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://FoodPanda:XfcBAQX4d0WEd86T@cluster0.klyxuv6.mongodb.net/foodPandaMERN?retryWrites=true&w=majority';
const mongoDB = async ()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser: true},async (err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function(err, data){
                if(err) console.log(err);
                else console.log(data);
            })
        }
    });
}


module.exports = mongoDB;





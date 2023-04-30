const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.post("/createuser", async (req,res)=>{
    try{
       await User.create({
             name: "Shyam Das",
             password:"1234",
             email:"shyamdas@mail.com",
             location:"Qwetrty",
        })
        res.json({success:true});
    }catch(error){
           console.log(error);
           res.json({success:false});
    }
})

module.exports = router;


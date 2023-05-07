const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { validationResult, body } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// const validate = validations => {
//     return async (req, res, next) => {
//       for (let validation of validations) {
//         const result = await validation.run(req);
//         if (result.errors.length) break;
//       }
  
//       const errors = validationResult(req);
//       if (errors.isEmpty()) {
//         return next();
//       }
  
//       res.status(400).json({ errors: errors.array() });
//     };
//   };
const jwtSecret = "Imcuriostolearnmernstackdevpment";
router.post("/createuser", [
    body('email').isEmail(),
    body('name').isLength({ min: 5}),
    body('password').isLength({min:3})]
    , async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }
 
        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt);

        try{
            await User.create({
                name:req.body.name,
                password:secPassword,
                email:req.body.email,
                location:req.body.location
            }).then(res.json({success:true}))
        } catch(error) {
            console.log(error)
            res.json({success:false});
        }
    }
)

router.post("/loginuser",  [
    body('email').isEmail(),
    body('password').isLength({min:3})]
     ,async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }
        let email = req.body.email;
        
        try{
          let userData =  await User.findOne({email});
          console.log(email + " "+userData);

          if(!userData){
            return res.status(400).json({ errors: "Try logging with correct credentials"});
          }

          const pwdCompare = await bcrypt.compare(req.body.password,userData.password);
        
          if(!pwdCompare){
            return res.status(400).json({ errors: "Try logging with correct credentials"});
          }
           const data = {
                user:{
                  id:userData.id   
                }
           }
 
           const authToken = jwt.sign(data,jwtSecret);
            return res.json({success:true, authToken:authToken});

        } catch(error) {
            console.log(error)
            res.json({success:false});
        }
    }
)

module.exports = router;






// validate([
//     body('email').isEmail(),
//     body('name').isLength({ min: 6 }),
//     body('password',"incorrect Password").isLength({ min: 6 })
//   ]) ,async (req,res)=>{


//     try{
//        await User.create({
//              name: req.body.name,
//              password:req.body.password,
//              email:req.body.email,
//              location:req.body.email,
//         })
//         res.json({success:true});
//     }catch(error){
//            console.log(error);
//            res.json({success:false});
//     }
// }
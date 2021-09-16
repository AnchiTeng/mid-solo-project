const express = require("express");
const router = express.Router()

const singUpTemplateCopy = require('../models/signupModel');



router.post('/signup',(req,res)=>{
  const singedUpUser = new singUpTemplateCopy({
      fullName:"her",
      userName:"hihi",
      email:"req.body.email",
      password:"req.body.password"
  })
    singedUpUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err);
    })
  })


  

  module.exports=router;
  

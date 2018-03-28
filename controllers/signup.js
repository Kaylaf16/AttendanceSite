const express = require('express');
const models = require('../models');
const teachers = models.Teacher;
const router = express.Router();

router.get('/',function(req,res){
  res.render('signup');
});

router.post('/',function(req,res){
  teachers.create({
    email:req.body.email,
    userName:req.body.username,
    password:req.body.password,
    teacherid :req.body.Tid
  }).then((teacher)=>{
    req.login(teacher,()=>{
    console.log("goog");
    res.redirect('/login')
  });
}).catch((e)=>{
  console.log(e);
  res.render('signup');
  console.log("hi");
});
});
module.exports=router;

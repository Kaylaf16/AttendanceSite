const express = require("express");
const router = express.Router();
const models = require('../models');
const teachers = models.Teacher;
const students = models.Student;
const classes = models.Class;
studentmap = {};
studentlength = 0;
currentstudent =0;
var getclasses = require('../public/businesslogic/getclasses.js');
var getstudents = require('../public/businesslogic/getstudents.js');

router.get('/',function(req,res){

  classes.findAll({
    where:{teacherId:req.user.teacherid}
    }).then((classes)=>{
      res.render('profile',{User: req.user.userName, Id:req.user.teacherid,classes:getclasses.getclasses(classes),classid:getclasses.getclassesid(classes)});
      }).catch((e)=>{
  console.log(e);
  });
})

router.get('/rostertable',function(req,res){

 classes.findAll({
   where:{classId:req.query.class}
 }).then((classes)=>{
   return getstudents.getstudents(classes); // checking must perform same function on it as before///
 }).then((student)=>{
   for(var i = 0; i < student.length;i++)
   {
     studentlength = student.length;
     students.findOne({
       where:{id:student[i]}
     }).then((foundstudent)=>{

      studentmap[foundstudent.dataValues.id] = foundstudent.dataValues.name
      if(currentstudent== studentlength-1)
      {
        console.log(studentmap);
        res.json(studentmap);
        res.render({students:studentmap})
      }
         currentstudent++;
     }).catch((e)={
     });

   }
 }).catch((e)={
 });
})


module.exports = router;

const express = require("express");
const router = express.Router();
const models = require('../models');
var presentstudents =[];
var currentpresentstudent ={};
const teachers = models.Teacher;
const students = models.Student;
const classes = models.Class;
var currentclass = 0;
studentmap = {};
studentname =[];
studentid=[];
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
        for (key in studentmap){
          studentname = (studentmap[key])
          studentid = key;
          }
          console.log(studentmap);

          currentclass = req.query.class;
          res.json({student:studentmap});

      }
         currentstudent++;
     }).catch((e)={
     });

   }
 }).catch((e)={
 });
})

router.get('/attendancetable',function(req,res){

    classes.findOne({
      where: {classId:currentclass}
    }).then((foundclass)=>{
       var startcheckdate = new Date(foundclass.dataValues.timeStart);
       var endcheckdate = new Date(foundclass.dataValues.timeStart);
       endcheckdate.setMinutes(foundclass.dataValues.timeStart.getMinutes()+60);
       startcheckdate.setMinutes(foundclass.dataValues.timeStart.getMinutes()-15)

      students.findAll({
        where:{$and:[{timeIn: {$gte:startcheckdate}},{timeIn: {$lte:endcheckdate}}]}
      }).then((student)=>{
          presentstudents = [];
           for(var i = 0; i < student.length;i++){
            currentpresentstudent ={name: student[i].dataValues.name, id: student[i].dataValues.id, timein:student[i].dataValues.timeIn};
            presentstudents.push(currentpresentstudent);

           }
           res.json(presentstudents);
      })
    }).catch((e)=>{
    })
})


module.exports = router;

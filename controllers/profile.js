const express = require("express");
const router = express.Router();

router.get('/',function(req,res){
  res.render('profile',{User: req.user.userName});
  console.log(req.user.id);
})


module.exports = router;

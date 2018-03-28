var exports = module.exports={};
exports.getstudents = function(classes){
  var classtotal = [];
for(var i = 0; i < classes.length;i++)
{
  if(!classtotal.indexOf(classes[i].dataValues.studentId) >= 0)
      {
         classtotal.push(classes[i].dataValues.studentId)
      }

}
return classtotal;

}

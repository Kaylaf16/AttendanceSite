var exports = module.exports={};
exports.getclasses = function(classes){
  var classtotal = [];
for(var i = 0; i < classes.length;i++)
{
  if(!classtotal.indexOf(classes[i].dataValues.subject) >= 0)
      {
         classtotal.push(classes[i].dataValues.subject +" "+ classes[i].dataValues.classId)
      }


}
return classtotal;

}
exports.getclassesid = function(classes){
  var classidtotal = [];
for(var i = 0; i < classes.length;i++)
{
  if(!classidtotal.indexOf(classes[i].dataValues.classId) >= 0)
      {
         classidtotal.push(classes[i].dataValues.classId)
      }

    return classidtotal;
}
}

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Class = sequelize.define('Class', {
    subject: DataTypes.STRING,
    teacherId: DataTypes.UUID,
    studentId: DataTypes.UUID,
    timeStart: DataTypes.DATE
  }, {});
  Class.associate = function(models) {
    // associations can be defined here
  };
  return Class;
};
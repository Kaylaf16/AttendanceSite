'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    RFID: DataTypes.INTEGER,
    timeIn: DataTypes.DATE
  }, {});
  Student.associate = function(models) {
    Student.belongsToMany(models.Teacher, {
  through: 'Class',
  as: 'teachers',
  foreignKey: 'StudentId'
});
  };
  return Student;
};

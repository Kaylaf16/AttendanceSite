'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    teacherid: DataTypes.INTEGER,
    email: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsToMany(models.Student, {
      through: 'Class',
      as: 'students',
      foreignKey: 'teacherId'
    });
  };
  return Teacher;
};

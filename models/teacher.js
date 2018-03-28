'use strict';
const bcrypt = require('bcrypt-nodejs');
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    teacherid: DataTypes.INTEGER,
    email: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Teacher.beforeCreate((user) =>
  new sequelize.Promise((resolve) => {
    bcrypt.hash(user.password, null, null, (err, hashedPassword) => {
      resolve(hashedPassword);
    });
  }).then((hashedPassword) => {
    user.password = hashedPassword;
  })
);
  Teacher.associate = function(models) {
    Teacher.belongsToMany(models.Student, {
      through: 'Class',
      as: 'students',
      foreignKey: 'teacherId'
    });
  };
  return Teacher;
};

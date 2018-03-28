'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Classes', [{
          classId : 101,
          subject : 'History',
          teacherId :21,
          studentId: 201,
          timeStart: new Date(),
          updatedAt: new Date(),
          createdAt: new Date ()
            }]);
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Classes', [{
      classId : 101
    }])
  }
};

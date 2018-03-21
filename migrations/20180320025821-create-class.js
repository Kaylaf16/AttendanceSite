'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING
      },
      teacherId: {
        type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'Teachers',
          key: 'teacherid'
        }
      },
      studentId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'Students',
          key: 'id'
        }
      },
      timeStart: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Classes');
  }
};

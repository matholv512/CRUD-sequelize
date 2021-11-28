'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('filme',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      fil_nomefilme: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      fil_produtora: {
        allowNull: false,
        type: Sequelize.STRING(15),
      },
      fil_diretor: {
        allowNull: false,
        type: Sequelize.STRING(15),
      },
      fil_anofilmagem: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      fil_pais: {
        allowNull: false,
        type: Sequelize.STRING(15),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {  
    await queryInterface.dropTable('filme');
  }
};

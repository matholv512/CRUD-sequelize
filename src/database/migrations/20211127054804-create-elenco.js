'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('elenco',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ele_nome: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      ele_sexo: {
        allowNull: false,
        type: Sequelize.CHAR,
      },
      ele_nacionalidade: {
        allowNull: false,
        type: Sequelize.STRING(15),
      },
      ele_dtnascimento: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('elenco');
  }
};

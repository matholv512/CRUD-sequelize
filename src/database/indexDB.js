const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const conexao = new Sequelize(dbConfig);

const filme = require('../api/models/filmeModels.js');
const elenco = require('../api/models/elencoModels.js');

try {
    conexao.authenticate();
    console.log('Conexão estabelecida!!!');
} catch (error) {
    console.log('Conexão não estabelecida!!!', error);
}

filme.init(conexao);
elenco.init(conexao);

module.exports = conexao;

const { Model, DataTypes } = require('sequelize');

class Elenco extends Model {
    static init(sequelize) {
        super.init({
            ele_nome: DataTypes.STRING,
            ele_sexo: DataTypes.CHAR,
            ele_nacionalidade: DataTypes.STRING,     
            ele_dtnascimento: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'elenco',
        }
        );
        return this;
    }
}

module.exports = Elenco;
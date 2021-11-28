const { Model, DataTypes } = require('sequelize');

class Filme extends Model {
    static init(sequelize) {
        super.init({
            fil_nomefilme: DataTypes.STRING,
            fil_produtora: DataTypes.STRING,
            fil_diretor: DataTypes.STRING, 
            fil_anofilmagem: DataTypes.INTEGER, 
            fil_pais: DataTypes.STRING,     
        }, {
            sequelize,
            tableName: 'filme',
        }
        );
        return this;
    }
}

module.exports = Filme;
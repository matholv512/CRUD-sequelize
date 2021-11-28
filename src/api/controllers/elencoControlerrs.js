
const Elenco = require('../models/elencoModels.js');

module.exports = {
    async index(requisicao, resposta) {
        const elenco = await Elenco.findAll();
        return resposta.json(elenco);
    },

    async store(req, res) {
        const { ele_nome, ele_sexo, ele_nacionalidade, ele_dtnascimento } = req.body;
        const elenco = await Elenco.create({ ele_nome, ele_sexo, ele_nacionalidade, 
            ele_dtnascimento  });
        return res.status(200).send({
            status: 1,
            message: 'Elenco cadastrado com sucesso!!!', 
            elenco
        })
    },

    async update(req, res) {
        const { ele_nome, ele_sexo, ele_nacionalidade, ele_dtnascimento } = req.body;
        const { codigo } = req.params;

        await Elenco.update({
            ele_nome, ele_sexo, ele_nacionalidade, ele_dtnascimento 
        }, { where: {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: 'Elenco ATUALIZADO com sucesso!!!'
        })
    },


    async delete(req, res) {
        const { codigo } = req.params;

        await Elenco.destroy({
        where: {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: 'Elenco DELETADO com sucesso!!!'
        })
    }

}


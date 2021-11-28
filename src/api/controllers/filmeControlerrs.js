const Filme = require('../models/filmeModels');

module.exports = {
    async index(requisicao, resposta) {
        const filme = await Filme.findAll();
        return resposta.json(filme);
    },

    async store(req, res) {
        const { fil_nomefilme, fil_produtora, fil_diretor, fil_anofilmagem,
            fil_pais } = req.body;
        const filme = await Filme.create({ fil_nomefilme, fil_produtora, fil_diretor, 
            fil_anofilmagem, fil_pais });
        return res.status(200).send({
            status: 1,
            message: 'Filme cadastrado com sucesso!!!', 
            filme
        })
    },

    async update(req, res) {
        const { fil_nomefilme, fil_produtora, fil_diretor, fil_anofilmagem,
            fil_pais } = req.body;
        const { codigo } = req.params;

        await Filme.update({
            fil_nomefilme, fil_produtora, fil_diretor, fil_anofilmagem,
            fil_pais  
        }, { where: {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: 'Filme ATUALIZADO com sucesso!!!'
        })
    },


    async delete(req, res) {
        const { codigo } = req.params;

        await Filme.destroy({
        where: {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: 'Filme DELETADO com sucesso!!!'
        })
    }

}


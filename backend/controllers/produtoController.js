// Importando o model de Produto que vai ser responsável por fazer o CRUD
const ProdutoModel = require('../models/Produto');

// Objeto com os métodos para fazer o CRUD
const produtoController = {

    // Criar produto
    criar: async (req, res) => {

        try {

            // Objeto com os dados de cadastro do produto
            const produto = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
                qtd: req.body.qtd,
            }

            // Criando o registro no banco de dados
            const resposta = await ProdutoModel.create(produto);

            if (!resposta) {
                res.status(400).json({ msg: "Erro ao salvar o produto." })
            } else {
                res.status(201).json({ msg: "Produto cadastrado com sucesso.", resposta });
            }

            return;

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Algo deu errado no servidor..." });
            return;
        }

    },

    // Mostrar todos os produtos
    verTudo: async (req, res) => {

        try {

            const resposta = await ProdutoModel.find();

            res.status(200).json({produtos: resposta});

            return;

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Algo deu errado no servidor..." });
        }

    },

    // Mostrar produto específico
    procurar: async (req, res) => {

        try {

            // Pegando o ID que veio pela URL
            const id = req.params.id;

            const resposta = await ProdutoModel.findById(id);

            if (!resposta) {

                res.status(404).json({ msg: 'Produto não encontrado.' });

            } else {

                res.status(200).json(resposta);

            }

            return;

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Algo deu errado no servidor..." });
            return;
        }

    },

    // Editar alguma informação do produto
    editar: async (req, res) => {

        try {

            // Pegando o ID pela URL
            const id = req.params.id;

            // Objeto com os dados para a alteração
            const produto = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
                qtd: req.body.qtd,
            }

            // Realizando a edição
            const resposta = await ProdutoModel.findByIdAndUpdate(id, produto);

            if (!resposta) {
                res.status(400).json({ msg: "Não foi possível editar o produto" });
            } else {
                res.status(200).json({ msg: "Produto editado com sucesso!" });
            }

            return;

        } catch (error) {

            console.log(error);
            res.status(500).json({ msg: "Algo deu errado no servidor..." });
            return;

        }

    },

    // Excluir algum produto
    deletar: async (req, res) => {

        try {

            // Pegando o ID pela URL
            const id = req.params.id;

            const resposta = await ProdutoModel.findByIdAndDelete(id);

            if (!resposta) {
                res.status(404).json({ msg: "Não foi possível excluir o produto" })
            } else {
                res.status(200).json({ msg: "Produto excluido com sucesso."})
            }

            return;

        } catch (error) {

            console.log(error);
            res.status(500).json({ msg: "Algo de errado com o servidor..." });
            return;

        }

    }

}

module.exports = produtoController;
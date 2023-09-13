const roteador = require('express').Router();

// Importando o Controller para realizar o CRUD
const produtoController = require('../controllers/produtoController');

// Rota para criar um produto
roteador.route('/produtos').post((req, res) => produtoController.criar(req, res));

// Rota para mostrar todos os produtos
roteador.route('/produtos').get((req, res) => produtoController.verTudo(req, res));

// Rota para buscar um produto específico
roteador.route('/produtos/:id').get((req, res) => produtoController.procurar(req, res));

// Rota para editar um produto
roteador.route('/produtos/:id').put((req, res) => produtoController.editar(req, res));

// Rota para excluir um produto
roteador.route('/produtos/:id').delete((req, res) => produtoController.deletar(req, res));

module.exports = roteador;
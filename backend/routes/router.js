// usando o roteador para gerenciar as rotas da aplicação inteira
const roteador = require('express').Router();

// Importando o roteador de produto
const roteadorProduto = require('./produto');

// Usando a rota de produto
roteador.use('/', roteadorProduto);


module.exports = roteador
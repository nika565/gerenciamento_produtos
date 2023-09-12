// usando o roteador para gerenciar as rotas da aplicação inteira
const roteador = require('express').Router();

roteador.route('/').get((req, res) => res.send(`Olá mundo!`))

module.exports = roteador
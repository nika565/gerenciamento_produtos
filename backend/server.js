// Importando o express
const express = require('express');

// Importando o CORS
const cors = require('cors');

// Body-parser para extrair dados do corpo da requisição
const bodyParser = require('body-parser');

const app = express();

// Habilitando o cors
app.use(cors());

// Usando o body-parser
app.use(bodyParser.urlencoded({ extended: false })); // Para dados de formulários HTML
app.use(bodyParser.json()); // Para dados JSON

// Permite a comunicação do dados via json
app.use(express.json());

// Importando a função de conexão com o banco de dados
const conn = require('./database/conn');
conn();

// Usando o roteador da minha aplicação
const roteador = require('./routes/router');
app.use('/api', roteador);

// colocando o meu servidor para rodar
app.listen(3000, () => {
    console.log('Acesse: http://localhost:3000/api');
});
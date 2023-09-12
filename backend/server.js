// Importando o express
const express = require('express');

// Importando o CORS
const cors = require('cors');

const app = express();

// Habilitando o cors
app.use(cors());

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
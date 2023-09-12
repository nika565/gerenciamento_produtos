// Importando o dotenv para usar a minha string de conexão com o banco de dados
require('dotenv').config();

const mongoose = require('mongoose');

const stringConn = process.env.STRINGCONNECT;

// Função para fazer a conexão com o banco de dados
async function conn() {

    try {

        mongoose.set('strictQuery', true);

        await mongoose.connect(stringConn);

        console.log(`Conectado com o banco de dados`);
        
    } catch (error) {
        console.log(error);
    }

}

module.exports = conn;

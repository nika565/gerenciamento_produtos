// Importando o mongoose
const mongoose = require('mongoose');

// Importando o Schema para realizar as operações no banco de dados
const { Schema } = mongoose;

const produtoSchema = new Schema({

    nome: {
        type: String,
        required: true
    },

    descricao: {
        type: String,
        required: true
    },

    preco: {
        type: Number,
        required: true
    },

    qtd: {
        type: Number,
        required: true
    }

}, { timestamps: true });

const Produto = mongoose.model('produto', produtoSchema);

module.exports = Produto;
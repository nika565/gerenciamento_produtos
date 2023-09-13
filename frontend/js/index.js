// Funções importadas
import { buscarProdutos, exibir } from "./modules/ler/todosProdutos.js";
import { visibilidadeCadastro, cadastrarProduto } from "./modules/criar/criar.js";

// Buscando os produtos cadastrados assim que carregar a página
window.addEventListener('load', async () => {

    // Esperando a requisição de todos os produtos
    const dados = await buscarProdutos();

    // Exibir dados na tela
    exibir(dados);

    // Habilitar o botão de cadastro
    visibilidadeCadastro();

});

// Evento de enviar o formulário
const formCadastro = document.querySelector('#formCadastro');
formCadastro.addEventListener('submit', async (evento) => {

    evento.preventDefault();

    // Pegando os valores
    const nome = document.querySelector('#nomeProduto').value;
    const descricao = document.querySelector('#descProduto').value;
    const preco = document.querySelector('#precoProduto').value;
    const qtd = document.querySelector('#qtdProduto').value;

    // Objeto a ser enviado na requisicao
    const produto = {
        nome: nome,
        descricao: descricao,
        preco: preco,
        qtd: qtd
    }

    await cadastrarProduto(produto);

});

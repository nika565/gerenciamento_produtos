// Funções importadas
import { buscarProdutos, exibir } from "./modules/ler/todosProdutos.js";
import { produtoEspecifico } from "./modules/ler/produto.js";
import { visibilidadeCadastro, cadastrarProduto } from "./modules/criar/criar.js";
import { editar, habilitarEdicao } from "./modules/editar/editar.js";
import { apagar } from "./modules/deletar/deletar.js";

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

// Pegar os eventos de clique nos botões de editar e apagar
document.addEventListener('click', async evento => {

    // Selecionando o elemento clicado
    const elemento = evento.target;

    if (elemento.classList.contains('btnEditar')) {

        const id = elemento.value;
        
        const produtoEditar = await produtoEspecifico(id);

        habilitarEdicao(produtoEditar);

    }

    if (elemento.classList.contains('btnApagar')) {

        const id = elemento.value;
        
        await apagar(id);

    }

}); 

// Processo de edição do produto
const formEditar = document.querySelector('#formEditar');
formEditar.addEventListener('submit', async evento => {

    evento.preventDefault();

    // Dados a serem editado
    const produto = {
        nome: document.querySelector('#nomeEditar').value,
        descricao: document.querySelector('#descEditar').value,
        preco: document.querySelector('#precoEditar').value,
        qtd: document.querySelector('#qtdEditar').value
    }

    const id = document.querySelector('#enviarEditado').value;
    
    await editar(id, produto);
});
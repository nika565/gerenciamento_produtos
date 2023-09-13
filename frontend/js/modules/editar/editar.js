// Importando a rota para fazer as requisiçãoes
import { url } from "../rota.js";

// Funçãoo para habilitar o formulário de cadastro
export function habilitarEdicao(produto) {
    
    const formEditar = document.querySelector('#formEditar');

    formEditar.style.display = "flex";

    // Carregar formulário com os dados do produto
    dadosEditar(produto);

    const fecharModalEditar = document.querySelector('#fecharModalEditar');
    fecharModalEditar.addEventListener('click', () => {
        formEditar.style.display = 'none';
    });

    return;
}

// Função para exibir os dados que vão ser editados
function dadosEditar(dados) {

    const nome = document.querySelector('#nomeEditar'); 
    const descricao = document.querySelector('#descEditar'); 
    const preco = document.querySelector('#precoEditar'); 
    const qtd = document.querySelector('#qtdEditar');
    const botao = document.querySelector('#enviarEditado');
    
    nome.value = dados.nome;
    descricao.value = dados.descricao;
    preco.value = dados.preco;
    qtd.value = dados.qtd;
    botao.value = dados._id;

    return;

}

export async function editar(id, produto) {

    try {
        
        const requisicao = await fetch(url + '/produtos/' + id, {

            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)

        });

        const resposta = await requisicao.json();

        alert(resposta.msg);
        
        location.reload();

    } catch (error) {
        console.error(error);
    }

}


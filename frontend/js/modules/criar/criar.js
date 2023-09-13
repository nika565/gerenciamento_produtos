// Importando a rota para fazer as requisiçãoes
import { url } from "../rota.js";

// Função que permite o botão habilitar o cadastro
export function visibilidadeCadastro() {

    // Botão habilitar o formulário
    const btnAbreModalcadastro = document.querySelector('.abreModalCadastro');
    btnAbreModalcadastro.addEventListener('click', () => {

        const formCadastro = document.querySelector('#formCadastro');
        formCadastro.style.display = 'flex';

    });

    // Desabilitar formulário
    const btnFecharModal = document.querySelector('#fecharModal');
    btnFecharModal.addEventListener('click', () => {
        
        const formCadastro = document.querySelector('#formCadastro');
        formCadastro.style.display = 'none';

    });

}

// Função para cadastrar um produto
export async function cadastrarProduto(dados) {

    try {

        const requisicao = await fetch(url + '/produtos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(dados)
        });

        const resposta = await requisicao.json();

        console.log(resposta);

        location.reload();

        return;
        
    } catch (error) {
        
        console.error(error);
        alert(`Não foi possível cadastrar o produto.`)

    }

}
// Importando a rota para fazer as requisiçãoes
import { url } from "../rota.js";

// Função para retornar todos os produtos
export async function buscarProdutos() {

    try {

        const requisicao = await fetch(url + '/produtos');

        const resposta = await requisicao.json();

        if (resposta.produtos.length === 0) return false;

        console.log(resposta.produtos)

        return resposta.produtos;

    } catch (error) {

        console.error(error);

    }

}

// Função para exibir todos os produto retornados
export function exibir(dados) {

    // Verificação dos dados
    if (!dados) {
        exibirMensagemCadastro();
    } else {
        exibirprodutos(dados);
    }

}

// Exibir uma menagem para cadastrar um produto
function exibirMensagemCadastro() {

    // Selecionando o elemento pai
    const exibicao = document.querySelector('.exibicao');

    // Criando elementos para ser exibidos dentro da div
    const titulo = document.createElement('h1');
    const subtitulo = document.createElement('h2');
    const paragrafo = document.createElement('p');
    const btn = document.createElement('button');

    // Adicionando conteúdo nos elementos
    titulo.textContent = "Ops...";
    subtitulo.textContent = "Parece que você não tem nenhum produto cadastrado.";
    paragrafo.textContent = "Clique no botão abaixo e cadastre seu produto agora mesmo!";
    btn.textContent = "Cadastrar Produto";

    // Adicionando uma classe ao botão
    btn.classList.add('abreModalCadastro');

    // Exibindo os elementos
    exibicao.appendChild(titulo);
    exibicao.appendChild(subtitulo);
    exibicao.appendChild(paragrafo);
    exibicao.appendChild(btn);

}

// Função para exibir todos os produtos na tela
function exibirprodutos(produtos) {

    // Selecionando o elemento pai
    const exibicao = document.querySelector('.exibicao');

    // Criando uma tabela para exibir os dados
    const table = document.createElement('table');

    // Linha da tabela
    const linha = document.createElement('tr');

    // Colunas da tabela
    const colunaNome = document.createElement('th');
    const colunaDesc = document.createElement('th');
    const colunaPreco = document.createElement('th');
    const colunaQtd = document.createElement('th');
    const colunaEditar = document.createElement('th');
    const colunaApagar = document.createElement('th');

    colunaNome.textContent = 'Nome';
    linha.appendChild(colunaNome);

    colunaDesc.textContent = 'Descrição';
    linha.appendChild(colunaDesc);

    colunaPreco.textContent = 'Preço';
    linha.appendChild(colunaPreco);

    colunaQtd.textContent = 'Quantidade';
    linha.appendChild(colunaQtd);

    colunaEditar.textContent = 'Editar';
    linha.appendChild(colunaEditar);

    colunaApagar.textContent = 'Apagar';
    linha.appendChild(colunaApagar);

    table.appendChild(linha);

    // renderizando uma tabela de produtos
    for (let produto of produtos) {

        // Criando os elementos
        const tr = document.createElement('tr');
        const tdNome = document.createElement('td');
        const tdDesc = document.createElement('td');
        const tdPreco = document.createElement('td');
        const tdQtd = document.createElement('td');
        const tdEditar = document.createElement('td');
        const tdApagar = document.createElement('td');
        const btnEditar = document.createElement('button');
        const btnApagar = document.createElement('button');

        // Adicionando textos ao elementos
        tdNome.textContent = produto.nome;
        tdDesc.textContent = produto.descricao;
        tdPreco.textContent = produto.preco;
        tdQtd.textContent = produto.qtd;
        btnEditar.textContent = "Editar";
        btnApagar.textContent = "Apagar";

        // Colocando ID nos botões
        btnEditar.setAttribute('class', 'btnEditar');
        btnApagar.setAttribute('class', 'btnApagar');

        // Colocando um valor nos botões
        btnEditar.setAttribute('value', produto._id);
        btnApagar.setAttribute('value', produto._id);

        // Adicionando os botões
        tdEditar.appendChild(btnEditar);
        tdApagar.appendChild(btnApagar);
        
        // Adicionando as colunas nas linhas
        tr.appendChild(tdNome);
        tr.appendChild(tdDesc);
        tr.appendChild(tdPreco);
        tr.appendChild(tdQtd);
        tr.appendChild(tdEditar);
        tr.appendChild(tdApagar);

        // Adicionando a linha na tabela
        table.appendChild(tr);

    }

    // renderizando a tabela
    exibicao.appendChild(table);

    const btn = document.createElement('button');
    btn.textContent = "Cadastrar Produto";

    // Adicionando uma classe ao botão
    btn.classList.add('abreModalCadastro');
    exibicao.appendChild(btn);

}
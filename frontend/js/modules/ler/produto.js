// Função para buscar a rota do back-end
import { url } from "../rota.js";

// Função para buscar um produto específico
export async function produtoEspecifico(id) {

    try {

        const requisicao = await fetch(url + '/produtos/' + id);

        const resposta = await requisicao.json();

        console.log(resposta);

        return resposta;
        
    } catch (error) {
        console.error(error);
        return false
    }

}
// Importando as rotas da requisição
import { url } from "../rota.js";

// Função para deletar
export async function apagar(id) {

    try {

        const requisicao = await fetch(url + '/produtos/' + id, {

            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },

        });

        const resposta = await requisicao.json();

        console.log(resposta);

        alert(resposta.msg);

        location.reload();
        
    } catch (error) {
        console.error(error);
        return;
    }

}
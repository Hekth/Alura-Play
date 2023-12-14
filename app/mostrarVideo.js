//importando a variavel conexao api que possui a função de requisição do arquivo conexaoApi.js
import { conexaoApi } from "./conexaoApi.js";
//capturando a ul onde serao armazenadas as li's de videos
const ulVideos = document.querySelector('[data-lista]');

//função que cria dinamicamente uma li de acordo com as informações que foram passados por parametro, ela retorna uma li
function constroiVideoLi({titulo, url, imagem, descricao}) {
    const li = document.createElement("li");
    li.className = "videos__item";

    li.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `
    return li;
}

//função que adiciona as li's ao DOM utilizando um forEach
async function adicionaVideosAoDom(pesquisa = false) {
    try {
        const lista = pesquisa ? pesquisa : await conexaoApi.conectarApi();
        ulVideos.innerHTML = "";
        lista.forEach((video) => {
            const li = constroiVideoLi(video);
            ulVideos.append(li);
        });
    } catch (error) {
        ulVideos.innerHTML = `<h2 class="mensagem__titulo"> Não foi possível carregar os vídeos: ${error} </h2>` 
    }
}

adicionaVideosAoDom();

export const adicionaVideos = {
    adicionaVideosAoDom
}
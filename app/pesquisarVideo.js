import { conexaoApi } from "./conexaoApi.js";
import { adicionaVideos } from "./mostrarVideo.js";

const ulVideos = document.querySelector("[data-lista]");
//utilizando data-attributes em vez de class ou id para capturar um elemento especifico no DOM
const pesquisarBtn = document.querySelector("[data-pesquisar]");
const inputPesquisa = document.querySelector("[data-inputPesquisa]");

//ao clicar no botao de pesquisar videos, pegarei o valor do input de pesquisa e chamarei a função
// que retorna os objetos da api filtrados pelo termo de pesquisa e ai imprimirei no DOM com a função adicionaVideosAoDom
pesquisarBtn.addEventListener('click', async () => {
    try {
        const valorInputPesquisa = inputPesquisa.value;
        const videosBuscados = await conexaoApi.pesquisaVideo(valorInputPesquisa);
        
        adicionaVideos.adicionaVideosAoDom(videosBuscados);
        
    } catch (error) {
        alert(error);
    }
});
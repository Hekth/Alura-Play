import { conexaoApi } from "./conexaoApi.js";

const inputUrl = document.getElementById('url');
const inputImagem = document.getElementById('imagem');
const inputTitulo = document.getElementById('titulo');
const formulario = document.querySelector('.container__formulario');

// quando o formulario for enviado, evitarei o comportamento padrão do submit de recarregar a página,
// capturarei os dados dos inputs, chamarei a função criaVideo que faz a requisição POST a API
// e redirecionarei o usuário a uma nova página indicando q o video foi publicado
formulario.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();
        const dados = {
            url: inputUrl.value,
            imagem: inputImagem.value,
            titulo: inputTitulo.value,
            descricao: Math.floor(Math.random() * 100).toString(),
        };
    
        await conexaoApi.criaVideo(dados);
    
        window.location.href = "../pages/envio-concluido.html";
    } catch (error) {
        ulVideos.innerHTML = `<h2 class="mensagem__titulo"> Não foi possível carregar os vídeos: ${error} </h2>`
    }
});
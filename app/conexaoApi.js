//requisitando os dados da api com async await
async function conectarApi() {
    const response = await fetch("http://localhost:3000/videos");
    const json = await response.json();
    return json;
}

//realizando uma requisição do tipo POST para acrescentar vídeos dinamicamente à api
async function criaVideo({url, titulo, imagem, descricao}) {
    const response = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            url: url,
            titulo: titulo,
            imagem: imagem,
            descricao: `${descricao} mil visualizações`
        }),
    });

    const conexaoConvertida = await response.json();
    return conexaoConvertida
}

//irá filtrar os objetos da api referente ao termo de busca do usuário
async function pesquisaVideo(termoDeBusca) {
    const response = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const json = await response.json();
    if (!json.length) throw new Error ("Não foi encontrado nenhum vídeo :(")
    return json;
}

// exportando a função para ser usada em outro arquivo
export const conexaoApi = {
    conectarApi,
    criaVideo,
    pesquisaVideo
}
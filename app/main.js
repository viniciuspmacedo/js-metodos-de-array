let livros = [];

const endPointDaApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBuscarLivrosDaApi()


async function getBuscarLivrosDaApi() {
    const resp = await fetch(endPointDaApi)
    livros = await resp.json()
    let livrosComDesconto = aplicaDescontoNosLivros(livros)
    exibirLivrosNaTela(livrosComDesconto)
}
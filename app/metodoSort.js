const botaoOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

botaoOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco(){
    let livrosOrdenado = livros.sort((a, b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenado)
}
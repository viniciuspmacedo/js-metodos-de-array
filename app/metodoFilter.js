const botoes = document.querySelectorAll('.btn')
botoes.forEach( botao => {
    botao.addEventListener('click', filtraLivros)
})

function filtraLivros(){
    elementoValorTotalLivrosDisponiveis.innerHTML = ""
    const elementoBotao = document.getElementById(this.id)
    const categoria = elementoBotao.value
    
    let livrosFiltrados = categoria == "disponivel" ? filtraLivrosPorDisponibilidade() :filtraLivrosPorCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados)
    
    if (categoria == "disponivel"){
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalLivrosDisponiveis(valorTotal)
    }
    
}

function exibirValorTotalLivrosDisponiveis(valorTotal){
    
    elementoValorTotalLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}

function filtraLivrosPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtraLivrosPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

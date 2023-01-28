
//GET

const listaProdutos = () =>
    fetch("http://localhost:3000/produto").then(resposta => resposta.json())

//POST

export const produtoServices = {
    listaProdutos
}
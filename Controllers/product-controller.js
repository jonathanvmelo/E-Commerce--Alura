import { produtoServices } from "../Services/produto-servicos.js"


const novoProduto = (name, price, imageUrl) => {
    const card = document.createElement("div");
    const conteudo = `
    <div class="produto">
        <img src="${imageUrl}" alt"img">
        <h1>${name}</h1>
        <p class="price">${price}</p>
        <a href="">Ver Produtos</a>
    </div> `

    card.innerHTML = conteudo;
    return card;
}

const produtos = document.querySelector("[data-product]");

const render = async () => {
    try {
        const listaProdutos = await produtoServices.listaProdutos();

        listaProdutos.forEach(element => {
            produtos.appendChild(novoProduto(element.name, element.price, element.imageUrl))
        })
    } catch (error) {
        console.log(error);
    }
}

render();
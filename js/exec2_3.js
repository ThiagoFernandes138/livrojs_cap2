const frm = document.querySelector("form")
const resp1 = document.querySelector("#outProduto");
const resp2 = document.querySelector("#outPreco");

frm.addEventListener("submit", (e)=> {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)
    const precoPromocao = preco * 2 + (preco / 2)
    const terceiroProduto = preco / 2

    resp1.innerText = `${produto} - Promoção: Leve 3 por: R$ ${precoPromocao.toFixed(2)}`
    resp2.innerText = `O 3° produto custa apenas: R$ ${terceiroProduto.toFixed(2)}`
    e.preventDefault()
})



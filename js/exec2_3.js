function verPromocao(){
var inProduto = document.getElementById("inProduto");
var inPreco = document.getElementById("inPreco");
var outProduto = document.getElementById("outProduto");
var outPreco = document.getElementById("outPreco");

var produto = inProduto.value;
var preco = Number(inPreco.value);

var precoPromocao = preco * 2 + (preco / 2);
var terceiroProduto = preco / 2;

outProduto.textContent =  produto + " - Promoção: Leve 3 por R$: " + precoPromocao.toFixed(2);
outPreco.textContent = "O 3 produto custa apenas R$: " + terceiroProduto.toFixed(2);
}
var btVerPromocao = document.getElementById("btVerPromocao");
btVerPromocao.addEventListener("click", verPromocao);
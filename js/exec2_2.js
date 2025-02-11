function calculoValor(){
    var inValor = document.getElementById("inValor");
    var inTempoCliente = document.getElementById("inTempoCliente");
    var outValor = document.getElementById("outValor");
    var outTempoCliente = document.getElementById("outTempoCliente");
    
    var valor = Number(inValor.value);
    var tempoCliente = Number(inTempoCliente.value);
    var calculoTempoCliente = Math.ceil(tempoCliente / 15);
    var total = calculoTempoCliente * valor;
    outValor.textContent = "Valor a Pagar R$: " + total.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calculoValor);
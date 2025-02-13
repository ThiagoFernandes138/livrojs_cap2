    const frm = document.querySelector("form")
    const resp1 = document.querySelector("#outValor")

    frm.addEventListener("submit", (e)=>{
        const valor = Number(frm.inValor.value)
        const tempoCliente = Number(frm.inTempoCliente.value)
        const calculoTempo = Math.ceil(tempoCliente / 15)
        const total = calculoTempo * valor
        resp1.innerText = `Valor a Pagar: R$ ${total.toFixed(2)}`
        
        e.preventDefault()

    })
  
   
    const frm = document.querySelector("form")
    const resp1 = document.querySelector("h3")
    
    frm.addEventListener("submit", (e)=> {
    const quilo = Number (frm.inQuilo.value);
    const grama = Number (frm.inGrama.value);

    const total = grama * quilo / 1000

    resp1.innerText = `Valor a pagar R$: ${total.toFixed(2)}`
    e.preventDefault()  
    })


 
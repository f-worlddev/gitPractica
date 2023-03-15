let contenedor = document.getElementById("contenedor")

window.onload(() => {
    
    let nombre  = prompt("ingresa tu nombre: ")
    contenedor.innerHTML = `Vienvenido a la practica ${nombre}`

})


const boton = document.getElementById("botonN1")
    .addEventListener("click", () => console.log("mensaje por consola!!"))

    

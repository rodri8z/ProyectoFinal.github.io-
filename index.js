console.log("INICIO")

//if (!sessionStorage.getItem('nombre')) {
  //let nombre = prompt("Ingrese su nombre: ")
  //sessionStorage.setItem('nombre', nombre)
//}
!sessionStorage.getItem('nombre') && sessionStorage.setItem('nombre', prompt("Ingrese su nombre: "))


let header = document.getElementsByTagName("header")
header[0].innerHTML = `<h1>Sport Life</h1>
<h5>Bienvenido/a ${sessionStorage.getItem('nombre')} a nuestra tienda</h5>`


let carrito = []
let contenedorTarjetas = document.getElementById("contenedorTarjetas")

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    let productos = data.listaProductos

    for (let i = 0; i < productos.length; i++) {
      let tarjeta = document.createElement("div")
      tarjeta.classList.add("tarjetaProducto")

      let {nombre,imagen,precio,descripcion}=productos[i]

      tarjeta.innerHTML = `
      <div class="contenedorNombre">
        <h3 class="nombreProducto">${nombre}</h3>
      </div>
      <div class='imagenProducto' style="background-image: url(${imagen})"></div>
      <div class="contenedorPrecioYCarrito">
        <h4>$${precio}</h4>
        <div class="botonCarrito"><i class="fa fa-cart-plus"></i></i></div>
      </div>
    `
      contenedorTarjetas.appendChild(tarjeta)
    }
  })

function agregarProductoAlCarrito() {
  console.log("HOLA")
}

const botonPrueba = document.getElementById('prueba')
botonPrueba.addEventListener('click', (e) => { 
  console.log("HOLA",e)
})
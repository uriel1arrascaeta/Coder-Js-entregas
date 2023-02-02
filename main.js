
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  let total = 0;


  function agregarcarrito(producto, precio) {
      console.log(producto, precio);
      carrito.push(producto);
      total = total + precio;
      document.getElementById("pagar").innerHTML = `Pagar $${total}`
  }
  

  function ultcompra() {
    alert(`muchas gracias por su compra el total es de ${total}`); 
    localStorage.setItem("carrito", JSON.stringify('carrito'));
    
  }

  const productos = [
  {
    nombre: "anillo",
    precio: "10000",
    id: "01"
  },
  {
    nombre: "anillo",
    precio: "10000",
    id: "01"
  },
  {
    nombre: "anillo",
    precio: "10000",
    id: "01"
  }, 
  {
    nombre: "anillo",
    precio: "10000",
    id: "01"
  } 
]

function renderizar (){
  const contenedor= document.querySelector(".contenedor")
  productos.forEach(p => {
  const divProducto= document.createElement("div")
  divProducto.innerHTML= `<div class="card>
  <img style="width:50px" src="./img/${productos}` // ACA SE ME COMPLICA
  contenedor.appendChild(divProducto)
  })
  }
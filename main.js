
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

function renderizar(){
  productos.forEach( p =>{
    const contenedor = document.querySelector(".contenedorproductosjs");
    productos.forEach((producto) =>){
      const divProducto = document.createElement("div");
      divProducto.innerHTML= `<div class="card">
      <img styele="width:50px" src="./img/${producto.img}" alt="...">
      <div class="card-body">
      <h5 class="card-text">${producto.nombre}</h5>
      <p class= "card-text">${producto.precio}</p>
      <button id = "${producto.id}class="btn-comprar"> Comprar </button>
       `
      
    }
  })
}
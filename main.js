
  let productos = [];
  let total = 0;


  function carrito(producto, precio) {
      console.log(producto, precio);
      productos.push(producto);
      total = total + precio;
      document.getElementById("pagar").innerHTML = `Pagar $${total}`
  }
  

  function ultcompra() {
    alert(`muchas gracias por su compra el total es de ${total}`);
    pagar.addEventListener("click",()=>{
    localStorage.removeItem("carrito");
    productos = [];
    carrito();
})
  }
    
  localStorage.setItem('carrito','total');
 

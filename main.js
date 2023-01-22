
  let productos = [];
  let total = 0;
  
  function carrito(producto, precio) {
      console.log(producto, precio);
      productos.push(producto);
      total = total + precio;
      document.getElementById("pagar").innerHTML = `Pagar $${total}`
  }
  
  function ultcompra() {
      alert(`total de su compra es de ${total}`);
       ;
  }

class Producto {
    constructor(id, nombre, precio) {
      this.id = id
      this.nombre = nombre
      this.precio = precio
    }
  }
  
  const productos = []
  
  const carrito = []


  productos.push(new Producto(1, "Anillo de Plata", 1500))
  productos.push(new Producto(2, "Anillo de Oro", 2500))
  productos.push(new Producto(3, "Pulsera de Plata", 3500))
  productos.push(new Producto(4, "Collar de Oro", 4500))
  

  mostrarProductos();
  
  
  function mostrarProductos(){
    let seleccionUser = parseInt(prompt(`
    HOLA COMO ESTAS?! BIENVENIDA/O A NUESTRA JOYERIA, te gustaria ver alguno de nuestros articulos?
    1-anillo de Plata $1500
    2-anillo de Oro $2500
    3-Pulsera de plata $3500
    4-Collar de Oro $4500`));  
  
    if(seleccionUser > 4 || seleccionUser < 1){
      alert('ingrese un dato válido')
      mostrarProductos();
    } else{
      const prodElegido = productos.find( prod => prod.id === seleccionUser);
      console.log(prodElegido);
      carrito.push(prodElegido)
      console.log(carrito)
      continuar();
    }
  }

  function continuar(){
    const continuar = prompt ('desea continuar con la compra? si o no')
    if(continuar === "si"){
      mostrarProductos();
    }else if (continuar === "no"){
      alert ('muchas gracias por su compra');
      calcularTotal();
    }else{
      alert ('ingrese si o no por favor');
      mostrarProductos();
    }
  }

  function calcularTotal (){
    const total = carrito.reduce((acc, el) => acc += el.precio, 0)
    alert(`total de su compra es de ${total}`);
  }


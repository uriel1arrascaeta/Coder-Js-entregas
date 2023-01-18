
class Producto {
    constructor(id, nombre, precio) {
      this.id = id
      this.nombre = nombre
      this.precio = precio
    }
  }
  
  const productos = []
  
  productos.push(new Producto(1, "Anillo de Plata", 1500))
  productos.push(new Producto(2, "Anillo de Oro", 2500))
  productos.push(new Producto(3, "Pulsera de Plata", 3500))
  productos.push(new Producto(4, "Collar de Oro", 4500))
  
  
  function bienvenida() {
    let tienda = prompt(`HOLA COMO ESTAS?! BIENVENIDA/O A NUESTRA JOYERIA, te gustaria ver alguno de nuestros articulos?
    1-anillo de Plata $1500
    2-anillo de Oro $2500
    3-Pulsera de plata $3500
    4-Collar de Oro $4500
    5-Collar de Plata (sin Stock)
    Esc: para salir o para termina la compra`);
  
    return tienda;
  }
  
  let cantidad = 0
  let total = 0
  let tienda = bienvenida();
  
  while (tienda.toLowerCase() != "esc") {
    switch (tienda) {
      case "1":
        cantidad = parseInt(prompt("Anillo de Plata elije la cantidad de 1 a 3"));
        total = cantidad * productos[0].precio;
          alert(`Usted compró ${cantidad} productos por el precio de ${total}`);
        break;
      case "2":
        cantidad = parseInt(prompt("Anillo de Oro elije la cantidad de 1 a 3"));
        total = cantidad * productos[1].precio;
          alert(`Usted compró ${cantidad} productos por el precio de ${total}`);
        break;
      case "3":
        cantidad = parseInt(prompt("Pulsera de Plata elije la cantidad de 1 a 3"));
        total = cantidad * productos[2].precio;
          alert(`Usted compró ${cantidad} productos por el precio de ${total}`);
        break;
      case "4":
        cantidad = parseInt(prompt("Collar de Oro elije la cantidad de 1 a 3"));
        total = cantidad * productos[3].precio;
          alert(`Usted compró ${cantidad} productos por el precio de ${total}`);
        break;
      default:
        alert("producto no encontrado");
        break;
    }
    tienda = bienvenida();
  
  
  }
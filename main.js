/*let edad = prompt ("ingrese edad")
edad = Number (edad)
if (edad >18){
    alert ("puedes pasar")
}
else (edad <18)
alert ("no puedes pasar")*/




/*let numero = prompt ("ingrese numero")
numero = Number (numero)
if (numero >1000){
    alert ("el numero es mayor a mil")
}else{
    alert ("el numero es menor a mil")
}

let saludo = prompt ("salude con un Hola")

saludo = String (saludo)
if (saludo === "Hola"){
    alert ("saludó correctamente")
}else{
    alert("no sabe saludar")
}

let azarNumero = prompt ("Elija un numero entre 10 y 50")
azarNumero = Number (azarNumero)
if (azarNumero <18 && azarNumero >50){
    alert ("el numero esta en entre 18 y 50")
}else{
    alert("el numero no esta entre 18 y 50")
}

let usuario = prompt ("nombre de usuario")
let contraseña = prompt ("contraseña")

usuario = String (usuario)
contraseña = Number (contraseña)

if (usuario === "usuario"){
    alert ("usurio correcto")
}else{
    alert("usuario incorrecto andá pa allá bobo")
}

if(contraseña === 1234){
    alert("contraseña correcta")
}else{
    alert("contraseña incorrecta andá pa allá bobo")
}

/*SWITCH

let edad = prompt ("Ingrese la edad")
edad = Number (edad)
switch (//variabe// edad){
    case 6:
        alert ("entrada gratis")
        break;
    case 18:
        alert ("50% de descuento")
        break;
    default:
        alert("Entrada normal")
        break;
}*/

/*let jugador1 = prompt ("jugador1");
let jugador2 = prompt ("jugador2");
let jugador3 = prompt ("jugador3");
let jugador4 = prompt ("jugador4");

alert ("jugador 1 es" + jugador1);
alert ("jugador 2 es" + jugador2);
alert ("jugador 3 es" + jugador3);
alert ("jugador 4 es" + jugador4);*/

/*let jugador1,jugador2,jugador3,jugador4;

for (let cantidajugadores = 0; cantidajugadores <4; cantidajugadores++){
    switch(cantidajugadores){
        case 0:
            jugador1 = prompt ("ingrese jugador 1")
            break;
        case 1:
            jugador2 = prompt ("ingrese jugador 2")
            break;
        case 2:
            jugador3 = prompt ("ingrese jugador 3")
            break;
        case 3:
            jugador4 = prompt ("ingrese jugador 4")
            break;
    }
}

for (let cantidadalerts = 0; cantidadalerts <4; cantidadalerts++){
    switch(cantidadalerts){
        case 0:
            alert("jugacor 1 se llama" + jugador1)
            break;
        case 1:
            alert("jugacor 2 se llama" + jugador2)
            break;
        case 2:
            alert("jugacor 3 se llama" + jugador3)
            break;
        case 3:
            alert("jugacor 4 se llama" + jugador4)
            break;
    }
}
*/

/*let listaDenombres = "";

let nombre = prompt ("ingrese un nombre de persona");

while (nombre != 0){
    listaDenombres = listaDenombres + nombre + ",";
    nombre = prompt ("ingrese un nombre de personas");

}
alert ("esta es tu lista de nombres" + listaDenombres)*/

/*const cantidadDeIteraciones = 4;
let nroIteracion = 0;

while (nroIteracion < cantidadDeIteraciones){
    alert("La iteracion en la que estamos es" + nroIteracion);
    nroIteracion++;
}*/

/*let nombre; 
let listaDenombres = "";


do{
    nombre = prompt("ingrese nombre");
    if (nombre !=0){
        listaDenombres = listaDenombres + nombre + " | ";
    }

}while(nombre != 0)

alert ("lisata de nombres es " + listaDenombres)*/



while (tienda.toLowerCase() != "esc") {
    switch (tienda) {
      case "1":
        cantidad = parseInt(prompt("anillo de Plata elije la cantidad de 1 a 3"));
        total += cantidad * productos[0].precio; 
        productos.length += cantidad;
        break;
      case "2":
        cantidad = parseInt(prompt("Anillo de Oro elije la cantidad de 1 a 3"));
        total += cantidad * productos[1].precio; 
        productos.length += cantidad;
        break;
      case "3":
        cantidad = parseInt(prompt("Pulsera de Plata elije la cantidad de 1 a 3"));
        total += cantidad * productos[1].precio; 
        productos.length += cantidad;
        break;
      case "4":
        cantidad = parseInt(prompt("Collar de Oro elije la cantidad de 1 a 3"));
        total += cantidad * productos[1].precio; 
        productos.length += cantidad;
        break;
      default:
        alert("producto no encontrado");
        break;
    }
    tienda = bienvenida();
  
    alert(`Usted compró ${cantidad} productos por el precio de ${total}`);
  }
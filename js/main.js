//funciones
function prendasAbuscar() {
  prenda = prompt(`¿Qué prenda busca para su ${categoria}? (Ingrese "nada" para terminar)`);
}

function infoPrenda(precio) {
  montoTotal += precio;
  alert(`la prenda que busca ${prenda} sale ${precio} .\nMonto total hasta ahora $` + montoTotal);
  console.log(`${montoTotal}`);
}
 function noTenemosPrenda(){
    alert("Lamentamos, no tenemos esa prenda en la tienda");
 }



 while (true) {
   let entrada = prompt("Ingrese su nombre por favor");
  
    if (isNaN(entrada)) {
      alert(`Bienvenido a Dasa ${entrada}`);
      break; // Sale del bucle si la entrada es un nombre válido
    } else {
      alert("Por favor, ingrese un nombre en lugar de un número.");
    }
  }

 let categoria = prompt("¿Qué categoría de prendas estás buscando? (bebe (0 a 3)/nena (4 a 14)/nene (4-14))");
 let prenda;
 let montoTotal = 0;
//Bucle
switch (categoria) {
  case "bebe":
    prendasAbuscar();
    while (prenda.toLowerCase() !== "nada") { 
      switch (prenda) {
        case "body":
          infoPrenda(6400);
          break;
        case "enterito":
          infoPrenda(4780);
          break;
        default:
          noTenemosPrenda();
      }
      prendasAbuscar(); // Pedir otra prenda
    }
    break;

    case "nena":
      prendasAbuscar();
      while (prenda.toLowerCase() !== "nada") {
        switch (prenda) {
          case "vestido":
            infoPrenda(8100);
            break;
          case "pollera":
            infoPrenda(5600);
            break;
          default:
            noTenemosPrenda();
        }
        prendasAbuscar(); // Pedir otra prenda
      }
      break;
      case "nene":
    prendasAbuscar();
    while (prenda.toLowerCase() !== "nada") { 
      switch (prenda) {
        case "camisa":
          infoPrenda(7300);
          break;
        case "pantalon":
          infoPrenda(10780);
          break;
        default:
          noTenemosPrenda();
      }
      prendasAbuscar(); // Pedir otra prenda
    }
    break;
  default:
    alert("Lamentamos, no tenemos esa categoría de prendas en la tienda");
}

//VARIABES
let montoTotal = 0;
let carrito = [];
let categoria;

// Arrays para almacenar información sobre las prendas y categorías
let opciones = ["bebes", "nenas", "nenes"];
let prendas = {
  bebes: ["body", "enterito"],
  nenes: ["camisa", "pantalon"],
  nenas: ["remera", "pollera", "vestido"],
};

let precios = {
  body: 6400,
  enterito: 4780,
  vestido: 8100,
  pollera: 5600,
  camisa: 7300,
  pantalon: 10780,
  remera: 32044,
};

//FUNCIONES
const buscarPrenda = () => {
  prenda = prompt(
    `¿Qué prenda busca para su ${categoria}? (Ingrese "nada" para terminar)`
  );
};

const preciosPrenda = (prenda, precio) => {
  montoTotal += precio;
  alert(
    `La prenda que busca ${prenda} cuesta $${precio}.\nMonto total hasta ahora $${montoTotal}`
  );
  console.log(`Monto total: $${montoTotal}`);
};

const respuestaCarrito = (prenda, precio) => {
  montoTotal += precio;
  const respuesta = prompt("¿Desea agregar la prenda al carrito? (si/no)");
  if (respuesta.toLowerCase() === "si") {
    carrito.forEach((ropa) => console.log(ropa));
    carrito.push(`${prenda} = $${precio}`);
    alert(`Su prenda "${prenda}" fue añadida al carrito`);
  }
};

const noTenemosPrenda = () => {
  alert("Lamentamos, esa prenda no la tenemos en nuestra tienda");
};

// FLUJO PRINCIPAL DEL PROGRAMA
categoria = prompt("Hola, Bienvenid@ a Dasa.\n¿Qué categoría de ropa busca (bebes/nenas/nenes)?  ");

if (opciones.includes(categoria)) {
  buscarPrenda();
  while (prenda.toLowerCase() !== "nada") {
    if (prendas[categoria].includes(prenda)) {
      preciosPrenda(prenda, precios[prenda]);
      respuestaCarrito(prenda, precios[prenda]);
    } else {
      noTenemosPrenda();
    }
    const continuarBuscando = prompt(
      "¿Desea seguir buscando otra prenda? (Sí/No)"
    ).toLowerCase();
    if (continuarBuscando === "si") {
      buscarPrenda();
    } else {
      break; // Sale del bucle si no desea buscar más prendas
    }
  }

  // Mostrar el contenido del carrito
  if (carrito.length > 0) {
    alert(`Contenido del carrito: ${carrito.join(", ")}. \nGracias por elegirnos!!`);
  } else {
    alert("Gracias, nos vemos la próxima");
  }
} else {
  alert("Lamentamos, no tenemos esa categoría de prendas en la tienda");
}

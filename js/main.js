// Variables
let categoria;
let montoTotal = 0;
let carrito = [];

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

// Funciones
const buscarPrenda = () => {
  prenda = prompt(
    `¿Qué prenda busca para su ${categoria}? (Ingrese "nada" para terminar)`
  );
};

const preciosPrenda = (prenda, precio) => {

  alert(
    `La prenda que busca ${prenda} cuesta $${precio}.`
  );

};

const respuestaCarrito = (prenda, precio) => {
  montoTotal += precio;
  const respuesta = prompt("¿Desea agregar la prenda al carrito? (si/no)");
  if (respuesta.toLowerCase() === "si") {
    carrito.push(`${prenda} = $${precio}`);
    console.log("*********************\nContenido del carrito:");
    carrito.forEach((ropa) => console.log(ropa));;
    console.log(`------------\nMonto total: $${montoTotal}`);
    alert(`Su prenda ${prenda} fue añadida al carrito. \nMonto total: $${montoTotal}`);
  }
};

const noTenemosPrenda = () => {
  alert("Lamentamos, esa prenda no la tenemos en nuestra tienda");
};

// Añade esta función para filtrar las prendas válidas
const obtenerPrendasValidas = (categoria) => {
  return opciones.includes(categoria) ? prendas[categoria] : [];
};

// Flujo principal del programa
categoria = prompt("Hola, Bienvenid@.\n¿Qué categoría de ropa busca (bebes/nenas/nenes)?  ");


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
    alert(`Contenido del carrito: ${carrito.join(", ") }.\nMonto total: $${montoTotal} \nGracias por elegirnos!!`);
  } else {
    alert("Gracias, nos vemos la próxima");
  }
} else {
  alert("Lamentamos, no tenemos esa categoría de prendas en la tienda");
}
const productos = [
  {
    id: "bodyc001",
    titulo: "body",
    imagen: "../assets/bebes/cod001-body.webp",
    imagen2: "../assets/bebes/cod001-bodyazul.webp",
    precio: 5300,
    tamanos: ["tamaño", "3 meses", "6 meses", "9 meses"],
    colores: ["pink", "blue", "red"],
    categoria: {
      id: "bebes",
      nombre: "body",
    },
  },
  {
    id: "pantalonc002",
    titulo: "pantalon",
    imagen: "../assets/bebes/cod002-pantalonRosa.webp",
    imagen2: "../assets/bebes/cod002-rojo.webp",
    imagen3: "../assets/bebes/cod002gris.webp",
    precio: 8130,
    tamanos: ["tamaño", "3 meses", "6 meses", "9 meses"],
    colores: ["white", "blue", "red"],
    categoria: {
      id: "bebes",
      nombre: "pantalon",
    },
  },
  {
    id: "shortc003",
    titulo: "short",
    imagen: "../assets/bebes/cod003-negro.webp",
    imagen2: "../assets/bebes/cod003-short.webp",
    precio: 6100,
    tamanos: [
      "tamaño",
      "Recién nacido",
      "3 meses",
      "6 meses",
      "9 meses",
      "12 meses",
      "18 meses",
      "24 meses",
    ],
    colores: ["blue", "pink", "black"],
    categoria: {
      id: "bebes",
      nombre: "short",
    },
  },
  {
    id: "gorrac004",
    titulo: "gorra",
    imagen: "../assets/bebes/cod004-gorroRosa.webp",
    imagen2: "../assets/bebes/cod004-negro.webp",
    precio: 4500,
    tamanos: ["tamaño", "Recien nacido", "3 meses", "6 meses"],
    colores: ["pink", "white", "blue"],
    categoria: {
      id: "bebes",
      nombre: "gorra",
    },
  },
  {
    id: "camperac005",
    titulo: "body",
    imagen: "../assets/bebes/cod005-campera.webp",
    imagen2: "../assets/bebes/cod005-campera1.webp",
    precio: 10500,
    tamanos: [
      "tamaño",
      "3 meses",
      "6 meses",
      "9 meses",
      "12meses",
      "18 meses",
      "24 meses",
    ],
    colores: ["pink", "grey", "black"],
    categoria: {
      id: "bebes",
      nombre: "campera",
    },
  },
  {
    id: "bodyc006",
    titulo: "body-rayado",
    imagen: "../assets/bebes/cod006-bodyrayado.webp",
    imagen2: "../assets/bebes/cod006-azul.webp",
    imagen2: "../assets/bebes/cod006-baige.webp",
    precio: 8700,
    tamanos: ["tamaño", "3 meses", "6 meses", "9 meses", "12 meses"],
    colores: ["white", "blue", "red", "pink"],
    categoria: {
      id: "bebes",
      nombre: "body",
    },
  },

  {
    id: "puloverc007",
    titulo: "pulover ",
    imagen: "../assets/bebes/cod007-pulover.webp",
    imagen2: "../assets/bebes/cod007-rosa.webp",
    precio: 7300,
    tamanos: ["tamaño", "3 meses", "6 meses", "9 meses"],
    colores: ["white", "blue", "red"],
    categoria: {
      id: "bebes",
      nombre: "pulover ",
    },
  },
  {
    id: "piuloverCandyc008",
    titulo: "Pulover Candy",
    imagen: "../assets/bebes/cod008-puloverCandy.webp",
    imagen: "../assets/bebes/cod008-negro.webp",
    precio: 6450,
    tamanos: ["9 meses", "12 meses", "18 meses", "24 meses"],
    colores: ["white", "blue", "pink", "black"],
    categoria: {
      id: "bebes",
      nombre: "pulover",
    },
  },
];

const contenedorProductos = document.querySelector("#contenedorProductos");
// Función para alternar el estado del corazón y agregar o quitar un producto del carrito
function toggleCorazon(event, producto) {
  const corazon = event.target; //el evento se hace al apretar el corazon
  if (corazon.classList.contains("love")) {
    corazon.classList.remove("love");
    quitarDelCarrito(producto);
  } else {
    corazon.classList.add("love");
    agregarAlCarrito(producto);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Tu prenda ha sido agregada",
      showConfirmButton: false,
      timer: 2500,
    });
  }
}

function cargarProductos() {
  productos.forEach((prenda, index) => {
    const card = document.createElement("article");
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-duration", "2500");
    card.classList.add("card", `card-${index + 1}`, "col-3", "me-2");

    //funcion para los botones de colores
    const coloresHTML = prenda.colores
      .map((color) => `<button class="${color}"></button>`)
      .join("");

    //funcion para un segundo carrusel si es que esxiste una seguna imagen.
    const carouselItem2 = prenda.imagen2
      ? `<div class="carousel-item">
          <img
            src="${prenda.imagen2}"
            class="d-block w-100"
            alt="c001"
            height="272"
          />
        </div>`
      : "";
    //agregando contenido al html
    card.innerHTML = ` <!-- carrusel -->
  <div id="carousel-${prenda.id}" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img
        src="${prenda.imagen}"
        class="d-block w-100"
        alt="c001"
        height="272"
      />
    </div>
    ${carouselItem2}
  </div>

     <button
     id=" boton-elegido"
       class="carousel-control-prev"
       type="button"
       data-bs-target="#carousel-${prenda.id}"
       data-bs-slide="prev"
     >
       <span
         class="carousel-control-prev-icon"
         aria-hidden="true"
       ></span>
       <span class="visually-hidden">Previous</span>
     </button>
     <button
       class="carousel-control-next"
       type="button"
       data-bs-target="#carousel-${prenda.id}"
      data-bs-slide="next"
     >
       <span
         class="carousel-control-next-icon"
         aria-hidden="true"
       ></span>
       <span class="visually-hidden">Next</span>
     </button>
   </div>
   <div class="descripcion">
   <p class="card-text fw-bold">${prenda.titulo}</p>
   <p>$${prenda.precio}</p>
   <select class="form-select" aria-label="Default select example">
     ${prenda.tamanos
       .map((tamano, index) => `<option value="${index}">${tamano}</option>`)
       .join("")}
   </select>
 </div>

 <!-- color de prendas -->
 <div id="boton-colores" class="borde-oscuro color-botones d-flex justify-content-center">
   ${coloresHTML}
   <img id="like" class="mt-1  " src="../assets/iconos/corazon.svg" alt="likes" height="28px" width="28px" />
 </div>
`;
    // Agrega el artículo al contenedor de productos
    contenedorProductos.appendChild(card);

    // Agregar un manejador de eventos al corazón
    const corazon = card.querySelector("#like");
    corazon.addEventListener("click", (e) => toggleCorazon(e, prenda));
  });
}

cargarProductos();

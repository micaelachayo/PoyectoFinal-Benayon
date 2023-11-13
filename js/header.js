
const headerContainer = document.querySelector("#header");

//imagenes
const imagenes = [
  {
    id: "usuario",

    img: "../assets/iconos/user.svg",
    alt: "usuario",
    width: 28,
    height: 28,
  },
  {
    id: "likes",
    img: "../assets/iconos/corazon.svg",
    alt: "likes",
    width: 28,
    height: 28,
  },
  {
    id: "carrito-icono",
    img: "../assets/iconos/carrito.svg",
    alt: "carrito",
    width: 28,
    height: 28,
  },
];

//CREANDO PRIMERA COLUMNA
const headerRow = document.createElement("div");
headerRow.classList.add("row");
headerContainer.appendChild(headerRow);

const col1 = document.createElement("div");
col1.classList.add(
  "col-3",
  "d-flex",
  "justify-content-center",
  "align-items-center"
);
col1.setAttribute("data-aos", "fade-right", "data-aos-duration", "1000");

headerRow.appendChild(col1);

imagenes.forEach((imagen) => {
  const img = document.createElement("img");
  img.classList.add("header-img");
  img.src = imagen.img;
  img.alt = imagen.alt;
  img.width = imagen.width;
  img.height = imagen.height;
  col1.appendChild(img);
});

// Crear el elemento span para el contador y agregarlo a la primera columna
const contadorSpan = document.createElement("span");
contadorSpan.id = "contador";
contadorSpan.textContent = "0";
col1.appendChild(contadorSpan);

// CREANDO SEGUNDA COLUMNA
const col2 = document.createElement("div");
col2.classList.add("col-7", "col-md-6", "text-center");
col2.setAttribute("data-aos", "fade-right");
col2.setAttribute("data-aos-duration", "1000");

// Crear el título h1 y agregarlo a la segunda columna
const titulo = document.createElement("h1");
titulo.classList.add("display-3", "pt-1", "ps-2", "text-center", "fw-bold");
titulo.textContent = "Dasa Bebés";
col2.appendChild(titulo);

// Agregar la segunda columna al contenedor del header
headerRow.appendChild(col2);


// CREANDO TERCER COLUMNA
const col3 = document.createElement("div");
col3.classList.add("col-2", "col-md-3", "text-center", "mt-4");
col3.setAttribute("data-aos", "fade-right");
col3.setAttribute("data-aos-duration", "1000");

// Crear el formulario y agregarlo a la tercera columna usando innerHTML
col3.innerHTML = `
  <form class="d-flex" role="search">
    <input
      class="form-control me-2 w-50 shadow input-buscador"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />

    <img
      class="me-5 pb-2 header-img"
      src="../assets/iconos/busqueda-de-lupa.svg"
      alt="buscador"
      width="28"
      height="28"
    />
  </form>
`;
//NAVBAR
// Create a new row for the navigation bar
const navRow = document.createElement("div");
navRow.classList.add("row");
headerContainer.appendChild(navRow);

// Create the navigation bar dynamically
const nav = document.createElement("nav");
nav.classList.add("navbar", "align-items-center");
nav.innerHTML = `
<div class="col-3 col-sm-4 col-md-4 list-unstyled">
<a href="../index.html"
  ><button
    type="button"
    class="py-1 px-3 px-md-4 rounded-pill boton ms-1"
  >
    Inicio
  </button>
</a>
</div>

<div class="col-9 col-sm-8 col-md-8 pt-3">
<ul class="d-flex list-unstyled ps-xl-5 ms-1 ms-xl-3">
  <li>
    <div class="btn-group despliegue">
      <button
        type="button"
        class="py-1 px-3 px-md-4 rounded-pill boton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Tienda
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="../pages/bebes.html"
            >Bebés
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="../pages/nenes.html"
            >Niños</a
          >
        </li>
        <li>
          <a class="dropdown-item" href="../pages/nenas.html"
            >Niñas</a
          >
        </li>
      </ul>
    </div>
  </li>

  <li>
    <div class="btn-group despliegue">
      <button
        type="button"
        class="py-1 px-2 px-md-3 rounded-pill boton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Nosotros
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="../pages/contacto.html"
            >Contacto</a
          >
        </li>
      </ul>
    </div>
  </li>

  <li>
    <div class="btn-group despliegue">
      <button
        type="button"
        class="py-1 px-3 px-md-4 rounded-pill boton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Ayuda
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="../pages/como-comprar.html"
            >Como comprar?</a
          >
        </li>
        <li>
          <a class="dropdown-item" href="../pages/talles.html"
            >Tabla de talles</a
          >
        </li>
      </ul>
    </div>
  </li>
</ul>
</div>
`;

// Append the navigation bar to the second row
navRow.appendChild(nav);

  // Obtén la referencia al objeto del carrito por su id

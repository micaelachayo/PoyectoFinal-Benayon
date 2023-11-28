const contenedorProductos = document.querySelector("#contenedorProductos");

fetch("https://micaelachayo.github.io/PoyectoFinal-Benayon/js/productos.json")
  .then((response) => response.json())
  .then((data) => {
    cargarProductos(data);
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });

function cargarProductos(productos) {
  productos.forEach((prenda, index) => {
    const card = document.createElement("article");
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-duration", "2500");
    card.classList.add("card", `card-${index + 1}`, "col-3", "me-2");

    //función para los botones de colores
    const coloresHTML = prenda.colores
      .map((color) => `<button class="${color}"></button>`)
      .join("");

    //función para un segundo carrusel si es que existe una segunda imagen.
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
    const carouselItem3 = prenda.imagen3
      ? `<div class="carousel-item">
         <img
           src="${prenda.imagen3}"
           class="d-block w-100"
           alt="c001"
           height="272"
         />
       </div>`
      : "";
    //agregando contenido al HTML
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
   ${carouselItem3}
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
<div id="boton-colores-${
      index + 1
    }" class="borde-oscuro color-botones d-flex justify-content-center">
  ${coloresHTML}
  <img id="like-${
    index + 1
  }" class="mt-1  " src="../assets/iconos/corazon.svg" alt="likes" height="28px" width="28px" />
</div>
`;
    // Agrega el artículo al contenedor de productos
    contenedorProductos.appendChild(card);
    // Agregar un manejador de eventos al corazón
    const corazon = card.querySelector(`#like-${index + 1}`);
    corazon.addEventListener("click", (e) => toggleCorazon(e, prenda));
  });
}
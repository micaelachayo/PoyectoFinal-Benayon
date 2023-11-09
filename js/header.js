document.addEventListener('DOMContentLoaded', function () {
    // Obtén la referencia al elemento donde deseas insertar el header
    const headerContainer = document.querySelector('#header-container');
  
    const divheader = document.createElement("div");
    divheader.classList.add ("row");
    divheader.innerHTML=`         <div
    data-aos="fade-right"
    data-aos-duration="1000"
    class="col-3 d-flex justify-content-center align-items-center"
  >
    <!-- logo de la izq -->
    <img
      class="header-img me-1"
      src="../assets/iconos/user.svg"
      alt="usuario"
      width="28"
      height="28"
    />
    <img
      class="header-img me-1"
      src="../assets/iconos/corazon.svg"
      alt="likes"
      width="28"
      height="28"
    />

    <img
      class="header-img"
      src="../assets/iconos/carrito.svg"
      alt="carrito"
      width="28"
      height="28"
    />
  </div>

  <!-- titulo -->
  <div
    data-aos="fade-right"
    data-aos-duration="1000"
    data-aos="fade-right"
    data-aos-duration="1000"
    class="col-7 col-md-6 text-center"
  >
    <h1 class="display-3 pt-1 ps-2 text-center fw-bold">Dasa Bebés</h1>
  </div>

  <!-- search -->
  <div
    data-aos="fade-right"
    data-aos-duration="1000"
    class="col-2 col-md-3 text-center mt-4"
  >
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
  </div>`;

  const divNav= this.document.createElement ("div");
  divNav.classList.add ("row");
  divNav.innerHTML=` <nav class="navbar align-items-center">
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
</nav>`;
headerContainer.appendChild(divheader);
headerContainer.appendChild(divNav);
})
 
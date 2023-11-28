// FUNCION PARA INICIALIZAR EL CONTADOR Y MOSTRAR EL CARRITO AL CARGAR LA PAG.
function inicializarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const contador = carrito.length;
  actualizarContador(contador);

  // Mostrar el carrito si no está vacío
  if (contador > 0) {
    console.log("El carrito no está vacío. Mostrar carrito.");
  }
}

//--------------------------------------------------------------------------------------
//AGREGAR AL CARRITO
async function agregarAlCarrito(producto) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  console.log(`Producto agregado al carrito:, ${producto.id}`);

  // Actualiza el contador después de agregar un producto
  const contador = carrito.length;
  await actualizarContador(contador);
}
//-----------------------------------------------------------------------------------
//QUITAR DEL CARRITO CUANDO HAGO CLICK EN EL CORAZON Y CAMBIAR NUMERITO
function quitarDelCarrito(producto) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const nuevoCarrito = carrito.filter((item) => item.id !== producto.id);
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

  console.log(`Producto eliminado del carrito:, ${producto.id}`);
  console.log("Carrito actualizado:", nuevoCarrito);

  // Actualiza el contador después de quitar un producto
  const contador = nuevoCarrito.length;
  actualizarContador(contador);
  borrarDelCarrito();
}

//--------------------------------------------------------------------
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
      title: `Ya está en el carrito`,
      text: producto.titulo + "=$" + producto.precio,
      imageUrl: producto.imagen,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: producto.id,
    });
  }
}
// Función para resetear los corazones
function resetearCorazones() {
  document.querySelectorAll(".love").forEach((corazon) => {
    corazon.classList.remove("love");
  });
}

//--------------------------------------------------------------------
// Función para confirmar la eliminación del producto
function confirmarEliminarProducto(productoId) {
  Swal.fire({
    title: "¿Seguro que desea borrar?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarProductoDelCarrito(productoId);
      Swal.fire("¡Se eliminó del carrito!", "", "success");
      confirmacionEliminar = true; // Establecer la bandera en true después de la confirmación
    } else {
      Swal.fire("Operación cancelada", "", "info");
      confirmacionEliminar = false; // Establecer la bandera en false si la respuesta es "No"
    }

    mostrarCarrito(); // Actualizar el contenido del carrito después de eliminar el producto
    actualizarContador(); // Actualizar el numerito después de la confirmación
  });
}
// Función para eliminar un producto que esta en el  carrito
function eliminarProductoDelCarrito(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
//-------------------------------------------------------------------------------------
//CONFIRMACION DE FINALIZAR COMPRA
function confirmarFinalizarCompra() {
  Swal.fire({
    title: "¿Desea continuar con la compra?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("¡Su compra ha sido exitosa!", "😊", "success");
      // Puedes realizar acciones adicionales aquí si es necesario
      resetearCarrito();
    } else {
      Swal.fire("Continúe comprando", "", "info");
      // El carrito sigue normal si el usuario elige no finalizar la compra
    }
  });
}
// Nueva función para resetear el carrito
function resetearCarrito() {
  localStorage.removeItem("carrito"); // Elimina el carrito del almacenamiento local
  actualizarContador(); // Actualiza el contador (lo pondrá en cero)
}
// Función para actualizar el contador en la página
async function actualizarContador() {
  const carritoActualizado = JSON.parse(localStorage.getItem("carrito")) || [];
  const contadorActualizado = carritoActualizado.length;
  document.getElementById("contador").textContent = contadorActualizado;
}
//---------------------------------------------------------------------------------------------
// Llama a la función de inicialización al cargar la página
document.addEventListener("DOMContentLoaded", inicializarCarrito);
//---------------------------------------------------------------------------------------------
// MOSTRAR CARRITO
async function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Crear el contenido del alert
  let alertContentHTML = '<div class="carrito-alert">';

  let totalPagar = 0; // Variable para almacenar el total a pagar

  carrito.forEach((producto) => {
    alertContentHTML += `<div class="carrito-item">
                          <img src="${producto.imagen}" alt="${
      producto.titulo
    }" style="width: 100px;"/>
                          <p>${producto.id}</p>
                          <p>$${producto.precio.toFixed(2)}</p>
                          <button  class="boton-borrar" id="${
                            producto.id
                          }1">Borrar</button>
                        </div>`;

    totalPagar += producto.precio;
  });

  // Agregar el total al contenido del alert
  alertContentHTML += `<div>Total a pagar: $${totalPagar.toFixed(2)}</div>`;
  alertContentHTML += "</div>";

  // Mostrar el alert con el contenido del carrito
  Swal.fire({
    title: "Carrito de compras",
    html: alertContentHTML,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true, // Agrega un botón de cierre en la esquina superior derecha
    footer:
      carrito.length > 0
        ? '<button id="finalizarCompra">Finalizar compra</button>'
        : "El carrito esta vacio", // Agrega el botón de finalizar compra solo si el carrito no está vacío
  }).then(() => {
    // Después de mostrar la alerta, agrega el evento al botón
    const btnFinalizarCompra = document.getElementById("finalizarCompra");
    if (btnFinalizarCompra) {
      btnFinalizarCompra.addEventListener("click", () => {
        confirmarFinalizarCompra();
      });
    }
  });
  // Agregar eventos de clic a los botones de borrar
  document.querySelectorAll(".boton-borrar").forEach((boton) => {
    boton.addEventListener("click", () => {
      const productoId = boton.id.replace("1", ""); // Obtener el ID del producto del botón
      confirmarEliminarProducto(productoId);
    });
  });
}
const carritoIcono = document.getElementById("carrito-icon");
carritoIcono.addEventListener("click", function () {
  // Muestra el carrito en lugar del mensaje de alerta
  mostrarCarrito();
});

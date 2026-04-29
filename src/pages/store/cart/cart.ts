import type { CartItem } from "../../../types/product";
const contenedor = document.getElementById("contenedor-carrito") as HTMLElement;
const totalElemento = document.getElementById("total") as HTMLElement;
const botonVaciar = document.getElementById("vaciar-carrito") as HTMLElement;
const carritoGuardado = localStorage.getItem("carrito");

const carrito: CartItem[] = carritoGuardado ? JSON.parse(carritoGuardado) : [];
botonVaciar.addEventListener("click", () => {
    localStorage.removeItem("carrito");
    location.reload();
});

const renderCarrito = () => {
    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío</p>";
        totalElemento.textContent = "";
        return;
    }

    let total = 0;


    carrito.forEach((item: CartItem) => {
        const div = document.createElement("div");

        const subtotal = item.precio * item.cantidad;
        total += subtotal;

        div.innerHTML = `
    <h3>${item.nombre}</h3>
    <p>Precio: $${item.precio}</p>
    <p>Cantidad: ${item.cantidad}</p>
    <p>Subtotal: $${subtotal}</p>
    <button class="eliminar">Eliminar</button>
    <hr>
`;
        const botonEliminar = div.querySelector(".eliminar");

        botonEliminar?.addEventListener("click", () => {
            const nuevoCarrito = carrito.filter((producto) => producto.id !== item.id);

            localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

            location.reload();
        });

        contenedor.appendChild(div);
    });

    totalElemento.textContent = "Total: $" + total;
};

renderCarrito();

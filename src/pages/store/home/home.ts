import { PRODUCTS, getCategories } from "../../../data/data";
import type { Product, CartItem } from "../../../types/product";

const listaCategorias = document.getElementById("lista-categorias") as HTMLElement;
const contenedor = document.getElementById("contenedor-productos") as HTMLElement;
const inputBusqueda = document.getElementById("input-busqueda") as HTMLInputElement;

const categorias = getCategories();

// Cargar categorías
const cargarCategorias = () => {
    listaCategorias.innerHTML = "";

    const liTodas = document.createElement("li");
    const botonTodas = document.createElement("button");

    botonTodas.textContent = "Todas";

    botonTodas.addEventListener("click", () => {
        cargarProductos(PRODUCTS);
    });

    liTodas.appendChild(botonTodas);
    listaCategorias.appendChild(liTodas);

    categorias.forEach((categoria) => {
        const li = document.createElement("li");
        const boton = document.createElement("button");

        boton.textContent = categoria.nombre;

        boton.addEventListener("click", () => {
            const productosFiltrados = PRODUCTS.filter((producto) => {
                return producto.categorias.some((cat) => cat.nombre === categoria.nombre);
            });

            cargarProductos(productosFiltrados);
        });

        li.appendChild(boton);
        listaCategorias.appendChild(li);
    });
};

// Cargar productos
const cargarProductos = (listaProductos: Product[]) => {
    contenedor.innerHTML = "";

    if (listaProductos.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron productos</p>";
        return;
    }

    listaProductos.forEach((producto) => {
        const article = document.createElement("article");

        article.innerHTML = `
            <img src="/assets/${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>$${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>
            <button ${!producto.disponible ? "disabled" : ""}>
                ${producto.disponible ? "Agregar" : "No disponible"}
            </button>
        `;

        const botonAgregar = article.querySelector("button");

        botonAgregar?.addEventListener("click", () => {
            const carritoGuardado = localStorage.getItem("carrito");
            const carrito: CartItem[] = carritoGuardado ? JSON.parse(carritoGuardado) : [];

            const productoExistente = carrito.find((item) => item.id === producto.id);

            if (productoExistente) {
                productoExistente.cantidad++;
            } else {
                carrito.push({
                    id: producto.id,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    cantidad: 1
                });
            }

            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert("Agregado al carrito");
        });

        contenedor.appendChild(article);
    });
};

cargarCategorias();
cargarProductos(PRODUCTS);

// Búsqueda
inputBusqueda.addEventListener("input", () => {
    const textoBuscado = inputBusqueda.value.toLowerCase();

    const productosFiltrados = PRODUCTS.filter((producto) =>
        producto.nombre.toLowerCase().includes(textoBuscado)
    );

    cargarProductos(productosFiltrados);
});
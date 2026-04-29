# 🍔 Food Store - Parcial Programación 3

## 📌 Descripción

Este proyecto corresponde al primer parcial de la materia Programación 3.  
Consiste en la evolución de una aplicación frontend llamada *Food Store*, incorporando funcionalidades dinámicas utilizando HTML, CSS, JavaScript y TypeScript.

El objetivo principal fue transformar una página estática en una aplicación interactiva que permita navegar productos, filtrarlos y gestionar un carrito de compras.

---

## ⚙️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- TypeScript
- Vite
- LocalStorage (persistencia de datos)

---

## 🚀 Funcionalidades implementadas

### 🛍️ Catálogo de productos
- Render dinámico de productos desde un array
- Visualización de nombre, descripción, imagen y precio

### 🔍 Búsqueda
- Filtro de productos por nombre en tiempo real
- Coincidencia parcial (no requiere coincidencia exacta)
- Mensaje si no se encuentran resultados

### 🧩 Filtro por categoría
- Listado dinámico de categorías
- Filtrado de productos según categoría seleccionada
- Opción para volver a ver todos los productos

### 🛒 Carrito de compras
- Agregar productos desde el catálogo
- Persistencia mediante `localStorage`
- Si el producto ya existe, se incrementa la cantidad
- Visualización de:
  - Nombre
  - Precio
  - Cantidad
  - Subtotal

### 💰 Cálculo de total
- Suma automática de subtotales
- Actualización dinámica del total

### 🗑️ Gestión del carrito (mejoras)
- Eliminación individual de productos
- Vaciado completo del carrito

---

## 📁 Estructura del proyecto
src/
├── data/
│ └── data.ts
├── types/
│ └── product.ts
├── pages/
│ └── store/
│ ├── home/
│ │ ├── home.html
│ │ └── home.ts
│ └── cart/
│ ├── cart.html
│ └── cart.ts
├── styles/
│ └── styles.css
public/
└── assets/

---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:
git clone https://github.com/TU-USUARIO/TU-REPO.git

2. Instalar dependencias:
pnpm install

3. Ejecutar el servidor de desarrollo:
pnpm dev

4. Abrir en el navegador:
http://localhost:5173

---

## 🧠 Consideraciones técnicas

- Se utilizó TypeScript para mejorar el control de tipos y evitar errores (`any`)
- Se separaron datos, lógica y vistas para una mejor organización
- Se implementó manipulación del DOM de forma dinámica
- Se utilizó `localStorage` para persistir el carrito sin necesidad de backend

---

## 🎯 Estado del proyecto

✔ Funcional  
✔ Cumple con todos los requisitos del parcial  
✔ Incluye mejoras adicionales  

---

## 👨‍💻 Autor

Andrés Rodríguez

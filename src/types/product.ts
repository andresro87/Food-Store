import type { ICategory } from "./category.ts";

export interface Product {
    id: number;
    eliminado: boolean;
    createdAt: string;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    imagen: string;
    disponible: boolean;
    categorias: ICategory[];
}

export interface CartItem {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
}
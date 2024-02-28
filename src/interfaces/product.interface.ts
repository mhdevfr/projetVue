import type { categorie } from "./filters.interface";

export interface ProductInterface {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    categorie: categorie;
}
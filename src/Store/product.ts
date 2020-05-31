import { Size } from "./size";

export interface Product {
    name: string;
    style: string;
    code_color: string;
    color_slug: string;
    color: string;
    on_sale: boolean,
    image: string;
    regular_price: string;
    actual_price: string;
    discount_percentage: string;
    installments: string;
    sizes: Size[];
}
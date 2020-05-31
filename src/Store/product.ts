import { Size } from "./size";

export interface Product {
    name: string
    style: string
    code_color: string
    color_slug: string
    color: string
    on_sale: boolean,
    regular_price: number,
    actual_price: number,
    discount_percentage: number,
    installments: number,
    sizes: Size[]
}
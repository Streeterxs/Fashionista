import { ProductsActionsTypes } from "./ProductsActionsTypes";
import { Product } from "../../product";
import { fetchProducts } from "../../../Services";

export type ProductsActions = {
    type: ProductsActionsTypes,
    products?: Product[]
}

export const getProducts = async () => {
    const products = await fetchProducts();
    return {
        type: ProductsActionsTypes.GET_PRODUCTS,
        products
    }
}

export function setProducts(products: Product[]): ProductsActions {
    return {
        type: ProductsActionsTypes.SET_PRODUCTS,
        products
    }
}
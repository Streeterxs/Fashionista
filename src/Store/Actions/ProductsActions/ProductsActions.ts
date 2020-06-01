import { ProductsActionsTypes } from "./ProductsActionsTypes";
import { Product } from "../../product";
import { fetchProducts } from "../../../Services";

export type ProductsActions = {
    type: ProductsActionsTypes,
    products?: Product[],
    style?: string
}

export const getProducts = () => {
    return {
        type: ProductsActionsTypes.GET_PRODUCTS
    }
}

export const getProduct = (styleIdentifier: string) => {
    return {
        type: ProductsActionsTypes.GET_PRODUCT,
        style: styleIdentifier
    }
}

export function setProducts(products: Product[]): ProductsActions {
    return {
        type: ProductsActionsTypes.SET_PRODUCTS,
        products
    }
}

export async function setProductsApi() {
    const products = await fetchProducts();
    return {
        type: ProductsActionsTypes.SET_PRODUCTS_API,
        products
    }
}
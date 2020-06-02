import { ProductSelected } from "../../productSelected";
import { CartActionsTypes } from "./CartActionsTypes";

export type CartActions = {
    type: CartActionsTypes,
    productSelected?: ProductSelected,
    sku?: string
};

export function addToCart(productSelected: ProductSelected) {
    return {
        type: CartActionsTypes.ADD_TO_CART,
        productSelected: productSelected
    }
}

export function plusOneProduct(productSku: string) {
    return {
        type: CartActionsTypes.PLUS_ONE,
        sku: productSku
    }
}

export function minusOneProduct(productSku: string) {
    return {
        type: CartActionsTypes.MINUS_ONE,
        sku: productSku
    }
}

export function removeProduct(productSku: string) {
    return {
        type: CartActionsTypes.REMOVE_PRODUCT,
        sku: productSku
    }
}
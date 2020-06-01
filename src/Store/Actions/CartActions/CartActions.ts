import { ProductSelected } from "../../productSelected";
import { CartActionsTypes } from "./CartActionsTypes";

export type CartActions = {
    type: CartActionsTypes,
    productSelected?: ProductSelected
};

export function addToCart(productSelected: ProductSelected) {
    return {
        type: CartActionsTypes.ADD_TO_CART,
        productSelected: productSelected
    }
}
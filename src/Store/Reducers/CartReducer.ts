import { ProductSelected } from "../productSelected";
import { CartActionsTypes } from "../Actions/CartActions/CartActionsTypes";
import { CartActions } from "../Actions/CartActions/CartActions";

export type CartState = {
    productsSelected: ProductSelected[];
    totalCost: number;
    totalProductSelected: number;
};

const INITIAL_STATE: CartState = {
    productsSelected: [],
    totalCost: 0,
    totalProductSelected: 0
};

export function cartReducer(state = INITIAL_STATE, action: CartActions) {
    switch (action.type) {
        case CartActionsTypes.ADD_TO_CART:
            const index = state.productsSelected.findIndex(product => product.sizeSelected?.sku === action.productSelected?.sizeSelected.sku);

            if (index >= 0) {
                state.productsSelected[index].quantity++
            } else {
                state.productsSelected.push(action.productSelected as ProductSelected);
            }

            const price = formatedPriceStringToNumber((action.productSelected as ProductSelected).regular_price);

            return {
                ...state,
                totalCost: +(state.totalCost + price).toFixed(2),
                totalProductSelected: state.productsSelected.reduce((acc, crr) => {
                    return acc + crr.quantity
                }, 0)
            };
            
        default:
            return state;
    }

}

function formatedPriceStringToNumber(formatedString: string) {
    return +(+formatedString.split(' ')[1].replace(',', '.')).toFixed(2)
}
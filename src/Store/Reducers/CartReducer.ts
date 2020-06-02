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
    let index;
    let price;
    switch (action.type) {
        case CartActionsTypes.ADD_TO_CART:
            index = state.productsSelected.findIndex(product => product.sizeSelected?.sku === action.productSelected?.sizeSelected.sku);

            if (index >= 0) {
                state.productsSelected[index].quantity++
            } else {
                state.productsSelected.push(action.productSelected as ProductSelected);
            }
            price = (action.productSelected as ProductSelected).discount_percentage ?
                formatedPriceStringToNumber((action.productSelected as ProductSelected).discount_value) :
                formatedPriceStringToNumber((action.productSelected as ProductSelected).regular_price);

            return {
                ...state,
                totalCost: state.totalCost + price,
                totalProductSelected: state.productsSelected.reduce((acc, crr) => {
                    return acc + crr.quantity
                }, 0)
            };
        
        case CartActionsTypes.PLUS_ONE:
            index = state.productsSelected.findIndex(product => product.sizeSelected?.sku === action.sku);
            if (index >= 0) {
                state.productsSelected[index].quantity++
                price = state.productsSelected[index].discount_percentage ?
                    formatedPriceStringToNumber(state.productsSelected[index].discount_value) :
                    formatedPriceStringToNumber(state.productsSelected[index].regular_price);
                
                console.log('price: ', price);

                return {
                    ...state,
                    totalCost: state.totalCost + price,
                    totalProductSelected: state.productsSelected.reduce((acc, crr) => {
                        return acc + crr.quantity
                    }, 0)
                };
            }

            return state;
            
        default:
            return state;
    }

}

function formatedPriceStringToNumber(formatedString: string) {
    return +formatedString.split(' ')[1].replace(',', '.')
}


export const handleDiscount = (regularPrice: string, discountPercent: string) => {
    const discountToNumber = (+discountPercent.replace('%', '.')) / 100;
    const priceToNumber = + regularPrice.split(' ')[1].replace(',', '.');
    return priceToNumber * (1 - discountToNumber);
};
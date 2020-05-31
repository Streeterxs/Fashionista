import { Product } from "../product";
import { ProductsActionsTypes } from "../Actions/ProductsActions/ProductsActionsTypes";
import { ProductsActions } from "../Actions/ProductsActions/ProductsActions";

const INITIAL_STATE: Product[] = [];

export function productsReducer(state = INITIAL_STATE, action: ProductsActions) {
    switch (action.type) {
        case ProductsActionsTypes.GET_PRODUCTS:
            if (state.length <= 0 ) return action.products;
            return state;

        case ProductsActionsTypes.SET_PRODUCTS:
            console.log(action.products);
            return action.products as Product[];
    
        default:
            return state;
    }

}
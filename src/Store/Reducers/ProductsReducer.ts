import { Product } from "../product";
import { ProductsActionsTypes } from "../Actions/ProductsActions/ProductsActionsTypes";
import { ProductsActions } from "../Actions/ProductsActions/ProductsActions";


type ProductStore = {
    productList: Product[],
    productFinded?: Product
}
const INITIAL_STATE: ProductStore = {
    productList: []
};

export function productsReducer(state = INITIAL_STATE, action: ProductsActions) {
    switch (action.type) {
        case ProductsActionsTypes.GET_PRODUCTS:
            return state;

        case ProductsActionsTypes.GET_PRODUCT:
            console.log('state: ', state);
            return {
                ...state,
                productFinded: state.productList.find(product => product.code_color === action.code_color)
            };

        case ProductsActionsTypes.SET_PRODUCTS:
            return {
                ...state,
                productList: action.products as Product[]
            };

        case ProductsActionsTypes.SET_PRODUCTS_API:
            return {
                ...state,
                productList: action.products as Product[]
            };
    
        default:
            return state;
    }

}
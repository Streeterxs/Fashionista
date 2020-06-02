import { Product } from "../product";
import { ProductsActionsTypes } from "../Actions/ProductsActions/ProductsActionsTypes";
import { ProductsActions } from "../Actions/ProductsActions/ProductsActions";


type ProductStore = {
    productList: Product[],
    filteredProduct: Product[]
    productFinded?: Product
}
const INITIAL_STATE: ProductStore = {
    productList: [],
    filteredProduct: []
};

export function productsReducer(state = INITIAL_STATE, action: ProductsActions) {
    switch (action.type) {
        case ProductsActionsTypes.GET_PRODUCTS:
            
            return state;

        case ProductsActionsTypes.GET_PRODUCT:

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

        case ProductsActionsTypes.FILTER_PRODUCTS:

            return {
                ...state,
                filteredProduct: state.productList.filter(product => 
                    action.name && action.name.length > 0 ? product.name.trim().toLocaleLowerCase().includes(action.name.trim().toLocaleLowerCase()) : false
                )
            }
    
        default:
            return state;
    }

}
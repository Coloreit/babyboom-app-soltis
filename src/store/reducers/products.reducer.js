import { PRODUCTS } from "../../data/products";
import { SELECT_PRODUCT, FILTER_PRODUCT } from '../actions/products.action'

const initalState = {
    products: PRODUCTS,
    filteredProducts: [],
    selected: null,
}

const ProductReducer = (state=initalState, action) => {
    switch(action.type) {
        case SELECT_PRODUCT: 
            return {
                ...state, selected: state.products.find(product => product.id === action.productId)
            }
        case FILTER_PRODUCT: 
        return {
            ...state, filteredProducts: state.products.filter(product => product.category === action.categoryId)
        }
        default:
            return state;
    }
}

export default ProductReducer;
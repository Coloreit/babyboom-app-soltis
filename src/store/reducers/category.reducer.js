import { CATEGORIES } from "../../data/categories";
import { SELECT_CATEGORY } from "../actions/category.action";

const initalState = {
    categories: CATEGORIES,
    selected: null,
}

const CategoryReducer = (state = initalState, action) => {
    switch(action.type) {
        case SELECT_CATEGORY: 
            const IndexCategory = state.categories.findIndex(cat => cat.id === action.categoryId)
            if (IndexCategory === -1) return state
            return {...state, selected: state.categories[IndexCategory]}
        default: 
            return state;
    }
}

export default CategoryReducer;
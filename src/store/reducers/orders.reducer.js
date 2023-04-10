import { GET_ORDERS } from "../actions/orders.action";

const INITIAL_STATE = {
    list: []
}

const ordersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                list: action.orders
            }
        default: 
            return state;
    }
}

export default ordersReducer;
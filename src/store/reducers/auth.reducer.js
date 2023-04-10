import { SIGN_UP } from "../actions/auth.action";

const initialState = {
    token: null,
    userId: null,
    isLoading: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SING_UP_START':
            return {
                ...state,
                isLoading: true
            }
        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                isLoading: false
            }
        case 'SING_UP_FAIL':
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default authReducer;
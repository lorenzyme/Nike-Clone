import { SEARCH_PRODUCTS } from "../actionTypes";

const initialState = () => {
    return null
};

const handleSearch = (state, action) => {
    return action.payload
};

export const searchProducts = (payload) => {
    return {
        type: SEARCH_PRODUCTS,
        payload
    }
};

export const search = (state = initialState(), action = {}) => {
    const actionHandlers = {
        [SEARCH_PRODUCTS]: handleSearch
    }

    
    const reducer = actionHandlers[action.type];
    return reducer ? reducer(state, action): state
};

import { ADD_TO_CART } from "../actionTypes";

const initialState = () => {
    return {
        tops: [],
        bottoms: [],
        shoes: [],
        accessories: []
    }
};

export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
};


export const handleAddToCart = (state, action) => {
    return  {...state, ...action.payload}
};


export const cartItems = (state = initialState(), action = {}) => {
    const actionHandlers = {
        [ADD_TO_CART] : handleAddToCart
    };
    const reducer = actionHandlers[action.type];
    return reducer ? reducer(state,action) : state
};

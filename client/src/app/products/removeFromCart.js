import { REMOVE_FROM_CART } from "../actionTypes";

const initialState = () => {
    return {
        tops: [],
        bottoms: [],
        shoes: [],
        accessories: []
    }
};

export const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
};


export const handleRemoveFromCart = (state, action) => {
    return {
        ...state.proucts.filter(item => product.id !== action.payload)
    };
};


export const cartItems = (state = initialState(), action = {}) => {
    const actionHandlers = {
        [REMOVE_FROM_CART] : handleRemoveFromCart
    };
    const reducer = actionHandlers[action.type];
    return reducer ? reducer(state,action) : state
};




import { GET_ALL_PRODUCTS } from "../actionTypes";

const initialState = () => {
    return {
        tops: [],
        bottoms: [],
        shoes: [],
        accessories: []
    }
};

export const allProducts = (payload) => {
    return {
        type: GET_ALL_PRODUCTS,
        payload
    }
};


// export const products = (state = initialState(), action = {}) => {
//     if(action.type === getAllProducts){
//         return {...state, ...action.payload}
//     }else{
//         return state
//     }
// };

// define the handler for this specific action
// takes a state and an action and returns the same way
export const handleAllProducts = (state, action) => {
    return {...state, ...action.payload}
};
// this is less an O(N) it's actually an O(1) operation
export const products = (state = initialState(), action = {}) => {
    // this object has a key of action type and the value is the action handler
    const actionHandlers = {
        [GET_ALL_PRODUCTS] : handleAllProducts
    };
    const reducer = actionHandlers[action.type];
    return reducer ? reducer(state,action) : state
};

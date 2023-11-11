import { getAllProducts } from "../actionTypes";

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
        type: getAllProducts,
        payload
    }
};


export const products = (state = initialState(), action = {}) => {
    if(action.type === getAllProducts){
        return {...state, ...action.payload}
    }else{
        return state
    }
};
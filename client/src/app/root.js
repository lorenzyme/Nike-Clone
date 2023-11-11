import { combineReducers } from '@reduxjs/toolkit'
import { products } from './products/products'




const rootReducer = () => {
    const combinedReducers = combineReducers({
        products,
    });
    return (state, action) => {
        return combinedReducers(state, action)
    }
    
};





export default rootReducer
import { combineReducers } from '@reduxjs/toolkit'
import { products } from './products/products'
import { users } from './users/users';



const rootReducer = () => {
    const combinedReducers = combineReducers({
        products,
        users
    });
    return (state, action) => {
        return combinedReducers(state, action)
    }
    
};





export default rootReducer
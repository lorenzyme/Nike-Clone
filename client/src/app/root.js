import { combineReducers } from '@reduxjs/toolkit'
import { products } from './products/products'
import { users } from './users/users';
import { search } from './search/search';



const rootReducer = () => {
    const combinedReducers = combineReducers({
        products,
        users,
        search
    });
    return (state, action) => {
        return combinedReducers(state, action)
    }
    
};






export default rootReducer
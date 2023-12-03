import { combineReducers } from '@reduxjs/toolkit'
import { products } from './products/products'
import { users } from './users/users';
import { search } from './search/search';
import cartReducer from './cart/cartSlice';



const rootReducer = () => {
    const combinedReducers = combineReducers({
        products,
        users,
        search,
        cart: cartReducer
    });
    return (state, action) => {
        return combinedReducers(state, action)
    }
    
};






export default rootReducer
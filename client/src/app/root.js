import { combineReducers } from '@reduxjs/toolkit'
import { products } from './products/products'
import { users } from './users/users';
import { search } from './search/search';
import cartReducer from './cart/cartSlice';
import { wishlist } from './wishlist/wishlist';



const rootReducer = () => {
    const combinedReducers = combineReducers({
        products,
        users,
        search,
        cart: cartReducer,
        wishlist
        
    });
    return (state, action) => {
        return combinedReducers(state, action)
    }
    
};






export default rootReducer
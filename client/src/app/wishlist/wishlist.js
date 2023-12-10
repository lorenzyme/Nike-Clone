import { STORE_USER, STORE_WISHLIST_ITEMS } from "../actionTypes";


const initialState = () => [];

export const storeWishlistItems = (payload) => {
    return {
        type: STORE_WISHLIST_ITEMS,
        payload
    }
};

export const handleAllWishlistItems = (state, action) => {
    return [...state, action.payload]
}

export const handleStoreUserWishlist = (state, action) => {
    return action.payload.wishlist
}

export const wishlist = (state = initialState(), action = {}) => {
    
    const actionHandlers = {
        [STORE_WISHLIST_ITEMS]: handleAllWishlistItems,
        [STORE_USER]: handleStoreUserWishlist,
    }
    const reducer = actionHandlers[action.type];
    return reducer ? reducer(state, action) : state
}
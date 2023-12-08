import { STORE_WISHLIST_ITEMS } from "../actionTypes";

const initialState = () => [];

export const storeWishlistItems = (payload) => {
    return {
        type: STORE_WISHLIST_ITEMS,
        payload
    }
};

export const handleAllWishlistItems = () => {
    return action.payload
}

export const wishlistItems = (state = initialState(), action = {}) => {
    const actionHandlers = {
        [STORE_WISHLIST_ITEMS]: handleAllWishlistItems

    }
    const reducer = actionHandlers[action.type];
    return reducer ? reducer(state, action) : state
}
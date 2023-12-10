import { STORE_USER, STORE_WISHLIST_ITEMS, DELETE_WISHLIST_ITEM } from "../actionTypes";

const initialState = () => ({});

export const storeWishlistItems = (payload) => {
    return {
        type: STORE_WISHLIST_ITEMS,
        payload
    }
};

export const deleteWishlistItem = (payload) => {
    return {
        type: DELETE_WISHLIST_ITEM,
        payload
    }
}

export const handleDeleteWishlistItem = (state, action) => {
    const newState = {...state}
    delete newState[action.payload]
    return newState
}

export const handleAllWishlistItems = (state, action) => {
    const newState = {...state}
    newState[action.payload.productId] = action.payload.id
    return newState
}

export const handleStoreUserWishlist = (state, action) => {
    const newState = {...state}
    action.payload.wishlist.forEach(wishlistItem => {
        newState[wishlistItem.productId] = wishlistItem.id 
    })
    return newState
}

export const wishlist = (state = initialState(), action = {}) => {
    
    const actionHandlers = {
        [STORE_WISHLIST_ITEMS]: handleAllWishlistItems,
        [STORE_USER]: handleStoreUserWishlist,
        [DELETE_WISHLIST_ITEM]: handleDeleteWishlistItem
    }
    const reducer = actionHandlers[action.type];
    return reducer ? reducer(state, action) : state
}
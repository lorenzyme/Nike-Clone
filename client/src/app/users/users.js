import { STORE_USER } from "../actionTypes";

const initialState = () => {
    return null
};

export const storeUser = (payload) => {
    return {
        type: STORE_USER,
        payload
    }
};
const handleUser = (state, action) => {
    return action.payload
};

export const users = (state = initialState(), action = {}) => {

    const actionHandlers = {
        [STORE_USER]: handleUser
    }

    const reducer = actionHandlers[action.type];
    return reducer ? reducer(state,action) : state
};
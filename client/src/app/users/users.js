import { STORE_USER } from "../actionTypes";

const initialState = null

export const storeUser = (payload) => {
    return {
        type: STORE_USER,
        payload
    }
};
const handleUser = (state, action) => {
    return action.payload.user
};

export const users = (state = null, action = {}) => {

    const actionHandlers = {
        [STORE_USER]: handleUser
    }

    const reducer = actionHandlers[action.type];
    return reducer ? reducer(state,action) : state
};
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './root';




export default configureStore({
    reducer: rootReducer(),
});
import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from './userInfoSlice';

const store = configureStore({
    reducer: {
        user: userInfoReducer,
    },
});

export default store;
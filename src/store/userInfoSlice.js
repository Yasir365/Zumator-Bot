import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
};

const userInfoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser(state, action) {
            // Save the entire payload as `userInfo` object
            state.userInfo = action.payload;
            console.log("Store User Info in Slice ::::::: ", action.payload);
            // Update `localStorage` with the latest `userInfo`
            localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
        },
        deleteUser(state) {
            state.userInfo = {};
            localStorage.removeItem('userInfo');
        },
    },
});

export const { saveUser, deleteUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;

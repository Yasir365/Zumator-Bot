import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
};

const userInfoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser(state, action) {
            state.userInfo.push(action.payload);
            console.log("Store User Info in Slice ::::::: ", action.payload);
            
            localStorage.setItem('userInfo', JSON.stringify(state.user));
        },
        deleteUser(state) {
            state.userInfo = {};
            localStorage.removeItem('userInfo');
        },
    },
});

export const { saveUser, deleteUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;
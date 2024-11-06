import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: {},
};

const userInfoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser(state, action) {
            state.userInfo = action.payload;
            // localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
        },
        deleteUser(state) {
            state.userInfo = {};
            // localStorage.removeItem('userInfo');
        },
    },
});

export const { saveUser, deleteUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;

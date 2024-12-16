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
        },
        deleteUser(state) {
            state.userInfo = {};
        },
    },
});

export const { saveUser, deleteUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(localStorage.getItem('userInfo')) || {},
};

const userSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        saveUser(state, action) {
            state.user.push(action.payload);
            localStorage.setItem('userInfo', JSON.stringify(state.user));
        },
        deleteUser(state) {
            state.items = [];
            localStorage.removeItem('userInfo');
        },
    },
});

export const { saveUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
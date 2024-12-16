import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: {
        "id": 7,
        "first_name": "Yasir",
        "last_name": "Saleem",
        "telegram_id": 7985990995,
        "referral_id": null,
        "points": 49956,
        "tickets": 7,
        "keys": 10,
        "diamonds": 100,
        "last_claim_day_id": "Day_1",
        "last_claim_date_time": "2024-12-13T13:39:56.000000Z",
        "last_ticket_claim_at": "2024-12-16T12:47:06.000000Z",
        "created_at": "2024-12-13T13:39:50.000000Z",
        "updated_at": "2024-12-16T09:52:02.000000Z"
    },
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

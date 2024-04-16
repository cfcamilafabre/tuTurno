import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        userAppointments: [],
    },

    reducers: {
        loginUser(state, action) {
            state.user = action.payload;
        },

        logoutUser(state) {
            state.user = null;
            state.userAppointments = [];
        },

        setUserAppointments(state, action){
            state.userAppointments = action.payload;
        },
    },
});

export const { loginUser, logoutUser, setUserAppointments } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { user: [], setUser: []},
    reducers: {
        addUser: (state, action) => {
            state.user.push(action.payload);   
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        }
    }
});

export const { addUser, setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

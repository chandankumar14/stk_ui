import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  address: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.address = action.payload.address;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.address = null;
    },
    updateAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { login, logout, updateAddress } = userSlice.actions;
export default userSlice.reducer;

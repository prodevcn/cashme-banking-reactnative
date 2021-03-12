import { createSlice } from '@reduxjs/toolkit';
import { isAuthenticated, removeToken } from '../../helpers/auth';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    data: {},
    isAuthenticated: isAuthenticated(),
    loading: false,
    error: {},
  },
  reducers: {
    loginStart: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = {};
    },
    loginError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logoutStart: (state, action) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) =>  {
      removeToken();
      state.loading = false;
      state.error = {};
    },
    logoutError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default loginSlice;

import { createSlice } from '@reduxjs/toolkit';
import { isAuthenticated, removeToken } from '../../helpers/auth';
import loginSlice from '../../features/login/loginSlice';
import api from '../../util/api';

const authSlice = createSlice({
  name: 'auth',
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

// Actions
const {
  loginStart,
  loginSuccess,
  loginError,
  logoutStart,
  logoutSuccess,
  logoutError,
} = loginSlice.actions;

export const authenticate = ({ email, password }) => async (dispatch, getState) => {
  try {
    dispatch(loginStart());
    const res = await api.post('/api/login', {
      email,
      password,
    });
    dispatch(loginSuccess(res.data && res.data.data));
  } catch (e) {
    dispatch(loginError(e.response && e.response.data.error));
  }
};

export const logout = () => async (dispatch, getState) => {
  try {
    dispatch(logoutStart());
    const res = await api.post('/api/logout');
    dispatch(logoutSuccess(res.data && res.data.data));
  } catch (e) {
    dispatch(logoutError(e.response && e.response.data.error));
  }
};

export default authSlice;

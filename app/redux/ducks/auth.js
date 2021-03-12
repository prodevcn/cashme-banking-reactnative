import loginSlice from '../../features/login/loginSlice';
import api from '../../util/api';

// Actions
const {
  loginStart,
  loginSuccess,
  loginError,
  logoutStart,
  logoutSuccess,
  logoutError,
} = loginSlice.actions;

export const authenticate = ({ email, password }) => async dispatch => {
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

export const logout = () => async dispatch => {
  try {
    dispatch(logoutStart());
    const res = await api.post('/api/logout');
    dispatch(logoutSuccess(res.data && res.data.data));
  } catch (e) {
    dispatch(logoutError(e.response && e.response.data.error));
  }
};

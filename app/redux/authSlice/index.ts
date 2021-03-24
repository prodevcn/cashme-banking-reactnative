import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import commonSlice from "../commonSlice";
import api from "../../util/api";
import { getToken, setToken, removeToken } from "../../helpers/auth";
import { AuthState, SignIn } from '../../interfaces/redux/auth';

const initialState: AuthState = {
  data: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOutSuccess: (state) => {
      state.data = null;
      state.token = null;
    },
    signInFulfilled: (state, action: PayloadAction<object | null>) => {
      state.data = action.payload;
    },
    setUserToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

// Actions
const { fetchStart, fetchSuccess, fetchError } = commonSlice.actions;
const { signOutSuccess, signInFulfilled, setUserToken } = authSlice.actions;

export const getUserToken = () => async (
  dispatch: Function,
  getState: Function
): Promise<void> => {
  try {
    const token: string | null = await getToken();

    // Store token and set default request header for all
    dispatch(setUserToken(token));
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const signIn = (signInData: SignIn) => async (
  dispatch: Function,
  getState: Function
): Promise<void> => {
  try {
    dispatch(fetchStart());

    const res: any = await api.post("/api/login", signInData);

    // Store token and set default request header for all
    await setToken(res.data.token);
    dispatch(setUserToken(res.data && res.data.data));
    api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;

    dispatch(fetchSuccess());
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const signUp = ({ email, password }: { email: string, password: string }) => async (
  dispatch: Function,
  getState: Function
): Promise<void> => {
  try {
    dispatch(fetchStart());

    const res: any = await api.post("/api/login", {
      email,
      password,
    });

    dispatch(fetchSuccess());
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const signOut = () => async (
  dispatch: Function,
  getState: Function
): Promise<void> => {
  try {
    dispatch(fetchStart());

    const res: any = await api.post("/api/logout");

    // Remove stored token and sign out
    await removeToken();
    dispatch(signOutSuccess());

    dispatch(fetchSuccess());
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const getUser = () => async (
  dispatch: Function,
  getState: Function
): Promise<void> => {
  try {
    dispatch(fetchStart());

    const res: any = await api.get("/api/login");
    dispatch(signInFulfilled(res.data && res.data.data));

    dispatch(fetchSuccess());
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const forgotPassword = (email: string) => async (
  dispatch: Function,
  getState: Function
): Promise<void> => {
  try {
    dispatch(fetchStart());

    const res: any = await api.post("/api/login", {
      email,
    });

    dispatch(fetchSuccess());
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export default authSlice;

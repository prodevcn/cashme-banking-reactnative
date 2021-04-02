import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import commonSlice from "../commonSlice";
import api from "../../util/api";
import { getToken, setToken, removeToken } from "../../helpers/auth";
import { AppDispatch, AppThunk } from "../../store";

interface AuthState {
  data: object | null;
  token: string | null;
}

interface AuthPayload {
  email: string;
  password: string;
}

const initialState: AuthState = {
  data: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOutSuccess: state => {
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

export const getUserToken = (): AppThunk => async dispatch => {
  try {
    const token = await getToken();

    // Store token and set default request header for all
    dispatch(setUserToken(token));
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const signIn = (signInData: AuthPayload): AppThunk => async dispatch => {
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

export const signUp = ({
  email,
  password,
}: AuthPayload): AppThunk => async dispatch => {
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

export const signOut = (): AppThunk => async dispatch => {
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

export const getUser = (): AppThunk => async dispatch => {
  try {
    dispatch(fetchStart());

    const res: any = await api.get("/api/login");
    dispatch(signInFulfilled(res.data && res.data.data));

    dispatch(fetchSuccess());
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const forgotPassword = (email: string): AppThunk => async dispatch => {
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

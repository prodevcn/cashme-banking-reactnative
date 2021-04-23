import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../util/api";
import { setToken } from "../../helpers/auth";
import { AppThunk } from "../../store";

interface AuthState {
  loading: boolean;
  token: string | undefined;
  error: object | undefined;
}

interface AuthPayload {
  username: string;
  password: string;
}

const initialState: AuthState = {
  loading: false,
  token: undefined,
  error: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInStarted: state => {
      state.loading = true;
    },
    signInFulfilled: (state, action: PayloadAction<string | undefined>) => {
      state.loading = false;
      state.token = action.payload;
    },
    signInFailed: (state, action: PayloadAction<object | undefined>) => {
      state.loading = false;
      state.token = undefined;
      state.error = action.payload;
    },
  },
});

const { signInStarted, signInFulfilled, signInFailed } = authSlice.actions;

export const signIn = (signInData: AuthPayload): AppThunk => async dispatch => {
  try {
    dispatch(signInStarted());

    const { data = {} }: any = await api.post("/api/auth/login", signInData);

    dispatch(signInFulfilled(data.data.token));

    await setToken(data.data.token);

    api.defaults.headers.common["Authorization"] = `Bearer ${data.data.token}`;
  } catch (e) {
    dispatch(signInFailed(e));
  }
};

export default authSlice;

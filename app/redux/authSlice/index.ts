import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../util/api";
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

    enrollPublicKeyStarted: state => {
      state.loading = true;
      state.error = undefined;
    },
    enrollPublicKeyFulfilled: state => {
      state.loading = false;
    },
    enrollPublicKeyFailed: (
      state,
      action: PayloadAction<object | undefined>,
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const {
  signInStarted,
  signInFulfilled,
  signInFailed,
  enrollPublicKeyStarted,
  enrollPublicKeyFulfilled,
  enrollPublicKeyFailed,
} = authSlice.actions;

export const signIn = (signInData: AuthPayload): AppThunk => async dispatch => {
  try {
    dispatch(signInStarted());

    const { data = {} }: any = await api.post(
      "/api/auth/mobile/login",
      signInData,
    );
    const token = data.data?.token;

    dispatch(signInFulfilled(token));

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return token;
  } catch (e) {
    dispatch(signInFailed(e.message));

    return e;
  }
};

export const enrollPublicKey = (
  username: string,
  publicKey: string,
): AppThunk => async dispatch => {
  try {
    dispatch(enrollPublicKeyStarted());

    const res = await api.post("/api/auth/enroll", { username, publicKey });

    dispatch(enrollPublicKeyFulfilled());

    return res;
  } catch (e) {
    dispatch(enrollPublicKeyFailed(e.message));

    return e;
  }
};

export const verifySignature = (
  username: string,
  signature: string,
  message: string,
): AppThunk => async dispatch => {
  try {
    dispatch(signInStarted());

    const { data = {} } = await api.post("/api/auth/verify", {
      username,
      signature,
      message,
    });
    const token = data.data?.token;

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    dispatch(signInFulfilled(token));

    return token;
  } catch (e) {
    dispatch(signInFailed(e.message));

    return e;
  }
};

export default authSlice;

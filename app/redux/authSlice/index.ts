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

    dispatch(signInFulfilled(data.data.token));

    api.defaults.headers.common["Authorization"] = `Bearer ${data.data.token}`;
  } catch (e) {
    dispatch(signInFailed(e));
  }
};

export const enrollPublicKey = (
  username: string,
  publicKey: string,
): AppThunk => async dispatch => {
  try {
    dispatch(enrollPublicKeyStarted());

    await api.post("/api/auth/enroll", { username, public_key: publicKey });

    dispatch(enrollPublicKeyFulfilled());
  } catch (e) {
    dispatch(enrollPublicKeyFailed(e));
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

    dispatch(signInFulfilled(data.data.token));

    api.defaults.headers.common["Authorization"] = `Bearer ${data.data.token}`;
  } catch (e) {
    dispatch(signInFailed(e));
  }
};

export default authSlice;

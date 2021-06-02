import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../util/api";
import * as auth from "../../helpers/auth";
import { AppThunk } from "../../store";

interface UserData {
  username: string;
  firstName: string;
  lastName: string;
  token: string;
  uri: string;
}

interface AuthState {
  data?: UserData;
  loading: boolean;
  token?: string;
  error?: object;
}

interface SignInPayload {
  username: string;
  password: string;
}

const initialState: AuthState = {
  data: undefined,
  loading: false,
  token: undefined,
  error: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStarted: state => {
      state.loading = true;
      state.error = undefined;
    },
    fetchFailed: (state, action: PayloadAction<object | undefined>) => {
      state.loading = false;
      state.error = action.payload;
    },

    signInFulfilled: (state, action: PayloadAction<string | undefined>) => {
      state.loading = false;
      state.token = action.payload;
    },

    enrollPublicKeyFulfilled: state => {
      state.loading = false;
    },

    enrollPinFulfilled: state => {
      state.loading = false;
    },
  },
});

const {
  fetchStarted,
  fetchFailed,

  signInFulfilled,
  enrollPublicKeyFulfilled,
  enrollPinFulfilled,
} = authSlice.actions;

export const signIn =
  (signInPayload: SignInPayload): AppThunk =>
  async dispatch => {
    try {
      dispatch(fetchStarted());

      const { data = {} }: any = await api.post(
        "/api/auth/mobile/login",
        signInPayload,
      );
      const token = data.data?.token;

      dispatch(signInFulfilled(token));

      await auth.setUsername(signInPayload.username);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return token;
    } catch (e) {
      dispatch(fetchFailed(e.message));

      return e;
    }
  };

export const enrollPublicKey =
  (username: string, publicKey: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(fetchStarted());

      const res = await api.post("/api/auth/enroll-key", {
        username,
        publicKey,
      });

      dispatch(enrollPublicKeyFulfilled());

      return res;
    } catch (e) {
      dispatch(fetchFailed(e.message));

      return e;
    }
  };

export const verifySignature =
  (username: string, signature: string, message: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(fetchStarted());

      const { data = {} } = await api.post("/api/auth/verify-signature", {
        username,
        signature,
        message,
      });
      const token = data.data?.token;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      dispatch(signInFulfilled(token));

      return token;
    } catch (e) {
      dispatch(fetchFailed(e.message));

      return e;
    }
  };

export const enrollPin =
  (username: string, password: string, pin: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(fetchStarted());

      const res = await api.post("/api/auth/enroll-pin", {
        username,
        password,
        pin,
      });

      dispatch(enrollPinFulfilled());

      return res;
    } catch (e) {
      dispatch(fetchFailed(e.message));

      return e;
    }
  };

export const verifyPin =
  (username: string, pin: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(fetchStarted());

      const { data = {} } = await api.post("/api/auth/verify-pin", {
        username,
        pin,
      });
      const token = data.data?.token;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      dispatch(signInFulfilled(token));

      return token;
    } catch (e) {
      dispatch(fetchFailed(e.message));

      return e;
    }
  };

export default authSlice;

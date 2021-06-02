import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../util/api";
import { AppThunk } from "../../store";

interface SignUpData {
  sent: boolean;
  email: string;
  phoneNumber: string;
  documentNumber: string;
}

interface SignUpState {
  data: SignUpData;
  loading: boolean;
  token?: string;
  error?: string;
}

interface SignUpPayload {
  email: string;
  phoneNumber: string;
  gcd: string;
}

const initialState: SignUpState = {
  data: {
    sent: false,
    phoneNumber: "",
    email: "",
    documentNumber: "",
  },
  loading: false,
  error: undefined,
};

const signUpSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStarted: state => {
      state.loading = true;
      state.error = undefined;
    },
    fetchFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    signUpFulfilled: (state, action: PayloadAction<SignUpData>) => {
      state.loading = false;
      state.data = action.payload;
    },

    resendEmailVerificationCodeFulfilled: (
      state,
      action: PayloadAction<SignUpData>,
    ) => {
      state.loading = false;
      state.data = action.payload;
    },

    submitEmailVerificationCodeFulfilled: state => {
      state.loading = false;
    },

    resendPhoneVerificationCodeFulfilled: (
      state,
      action: PayloadAction<SignUpData>,
    ) => {
      state.loading = false;
      state.data = action.payload;
    },

    setPasswordFullfiled: state => {
      state.loading = false;
    },
  },
});

const {
  fetchStarted,
  fetchFailed,

  signUpFulfilled,
  resendEmailVerificationCodeFulfilled,
  submitEmailVerificationCodeFulfilled,
  resendPhoneVerificationCodeFulfilled,
  setPasswordFullfiled,
} = signUpSlice.actions;

export const signUp =
  (signUpPayload: SignUpPayload): AppThunk =>
  async dispatch => {
    try {
      dispatch(fetchStarted());

      const { headers, data } = await api.post(
        "/api/send-identity-verification-email",
        signUpPayload,
      );
      const signUpData: SignUpData = data.data;

      api.defaults.headers.common["suuid"] = headers.suuid;

      dispatch(signUpFulfilled(signUpData));

      return signUpData;
    } catch (e) {
      dispatch(fetchFailed(e.message));

      throw e;
    }
  };

export const resendEmailVerificationCode =
  (): AppThunk => async (dispatch, getState) => {
    try {
      dispatch(fetchStarted());

      const { data } = await api.post(
        "/api/resend-identity-verification-email",
      );
      const signUpData = {
        ...getState().signUp.data,
        sent: data.data.sent,
      };

      dispatch(resendEmailVerificationCodeFulfilled(signUpData));

      return data.data;
    } catch (e) {
      dispatch(fetchFailed(e.message));

      throw e;
    }
  };

export const submitEmailVerificationCode =
  (code: object): AppThunk =>
  async dispatch => {
    try {
      dispatch(fetchStarted());

      const { data } = await api.post("/api/email-code-verify", code);

      dispatch(submitEmailVerificationCodeFulfilled());

      return data.data;
    } catch (e) {
      dispatch(fetchFailed(e.message));

      throw e;
    }
  };

export const resendPhoneVerificationCode =
  (): AppThunk => async (dispatch, getState) => {
    try {
      dispatch(fetchStarted());

      const { data } = await api.get("/api/verification-sms");
      const signUpData = {
        ...getState().signUp.data,
        sent: data.data.sent,
      };

      dispatch(resendPhoneVerificationCodeFulfilled(signUpData));

      return data.data;
    } catch (e) {
      dispatch(fetchFailed(e.message));

      throw e;
    }
  };

export const submitPhoneVerificationCode =
  (code: object): AppThunk =>
  async dispatch => {
    try {
      dispatch(fetchStarted());

      const { data } = await api.post("/api/verify-sms", code);

      dispatch(submitEmailVerificationCodeFulfilled());

      return data.data;
    } catch (e) {
      dispatch(fetchFailed(e.message));

      throw e;
    }
  };

export const setPassword =
  (values: object): AppThunk =>
  async dispatch => {
    try {
      dispatch(fetchStarted());

      const { data } = await api.post("/api/password", values);

      dispatch(setPasswordFullfiled());

      return data.data;
    } catch (e) {
      dispatch(fetchFailed(e.message));

      throw e;
    }
  };

export default signUpSlice;

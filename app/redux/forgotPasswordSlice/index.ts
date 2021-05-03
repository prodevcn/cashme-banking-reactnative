import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../util/api";
import { AppThunk } from "../../store";

interface DataSuccessProps {
  sent?: boolean;
  username?: string;
  verified?: boolean;
}

interface ForgotPasswordState {
  loading: boolean;
  data: DataSuccessProps | undefined;
  error: any;
}

interface ForgotPasswordPayload {
  username: string;
}

interface SubmitCodePayload {
  code: string;
  username: string;
}

const initialState: ForgotPasswordState = {
  loading: false,
  data: undefined,
  error: undefined,
};

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    forgotPasswordStarted: state => {
      state.loading = true;
      state.error = undefined;
    },
    forgotPasswordFulfilled: (
      state,
      action: PayloadAction<DataSuccessProps | undefined>,
    ) => {
      state.loading = false;
      state.data = action.payload;
      state.error = undefined;
    },
    forgotPasswordFailed: (
      state,
      action: PayloadAction<object | undefined>,
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    resendCodeStarted: state => {
      state.loading = true;
      state.error = undefined;
    },
    resendCodeFulfilled: (
      state,
      action: PayloadAction<DataSuccessProps | undefined>,
    ) => {
      state.loading = false;
      state.data = action.payload;
      state.error = undefined;
    },
    resendCodeFailed: (state, action: PayloadAction<object | undefined>) => {
      state.loading = false;
      state.error = action.payload;
    },
    submitCodeStarted: state => {
      state.loading = true;
      state.error = undefined;
    },
    submitCodeFulfilled: (
      state,
      action: PayloadAction<DataSuccessProps | undefined>,
    ) => {
      state.loading = false;
      state.data = {
        ...state.data,
        verified: action.payload?.verified,
      };
      state.error = undefined;
    },
    submitCodeFailed: (state, action: PayloadAction<object | undefined>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const {
  forgotPasswordStarted,
  forgotPasswordFulfilled,
  forgotPasswordFailed,
  resendCodeStarted,
  resendCodeFulfilled,
  resendCodeFailed,
  submitCodeStarted,
  submitCodeFulfilled,
  submitCodeFailed,
} = forgotPasswordSlice.actions;

export const forgotPassword = (
  forgotPasswordData: ForgotPasswordPayload,
): AppThunk => async dispatch => {
  try {
    dispatch(forgotPasswordStarted());

    const { data = {} }: any = await api.post(
      "/api/auth/send-recovery-code",
      forgotPasswordData,
    );

    dispatch(forgotPasswordFulfilled(data.data));

    return data.data;
  } catch (e) {
    dispatch(forgotPasswordFailed(e.message));

    throw e;
  }
};

export const resendRecoveryCode = (
  forgotPasswordData: ForgotPasswordPayload,
): AppThunk => async dispatch => {
  try {
    dispatch(resendCodeStarted());

    const { data = {} }: any = await api.post(
      "/api/auth/resend-recovery-code",
      forgotPasswordData,
    );

    dispatch(resendCodeFulfilled(data.data));

    return data.data;
  } catch (e) {
    dispatch(resendCodeFailed(e.message));

    throw e;
  }
};

export const submitRecoveryCode = (
  submitCodeData: SubmitCodePayload,
): AppThunk => async dispatch => {
  try {
    dispatch(submitCodeStarted());

    const { data = {} }: any = await api.post(
      "/api/auth/submit-recovery-code",
      submitCodeData,
    );

    dispatch(submitCodeFulfilled(data.data));

    return data.data;
  } catch (e) {
    dispatch(submitCodeFailed(e.message));

    throw e;
  }
};

export default forgotPasswordSlice;

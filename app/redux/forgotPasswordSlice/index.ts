import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../util/api";
import { AppThunk } from "../../store";

interface DataSuccessProps {
  sent?: boolean;
  username?: string;
  verified?: boolean;
  question?: string;
  answerVerified?: boolean;
  passwordReset?: boolean;
}

interface ForgotPasswordState {
  loading: boolean;
  data: DataSuccessProps | undefined;
  error: any;
}

interface ForgotPasswordPayload {
  username: string;
}

interface GetSecurityQuestionPayload {
  username: string;
}

interface submitSecurityAnswerPayload {
  username: string;
  answer: string;
}

interface submitResetPasswordPayload {
  username: string;
  password: string;
  passwordConfirmation: string;
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
    getSecurityQuestionStarted: state => {
      state.loading = true;
      state.error = undefined;
    },
    getSecurityQuestionFulfilled: (
      state,
      action: PayloadAction<DataSuccessProps | undefined>,
    ) => {
      state.loading = false;
      state.data = {
        ...state.data,
        question: action.payload?.question,
      };
      state.error = undefined;
    },
    getSecurityQuestionFailed: (
      state,
      action: PayloadAction<object | undefined>,
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    submitSecurityAnswerStarted: state => {
      state.loading = true;
      state.error = undefined;
    },
    submitSecurityAnswerFulfilled: (
      state,
      action: PayloadAction<DataSuccessProps | undefined>,
    ) => {
      state.loading = false;
      state.data = {
        ...state.data,
        answerVerified: action.payload?.answerVerified,
      };
      state.error = undefined;
    },
    submitSecurityAnswerFailed: (
      state,
      action: PayloadAction<object | undefined>,
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    submitResetPasswordStarted: state => {
      state.loading = true;
      state.error = undefined;
    },
    submitResetPasswordFulfilled: (
      state,
      action: PayloadAction<DataSuccessProps | undefined>,
    ) => {
      state.loading = false;
      state.data = {
        ...state.data,
        passwordReset: action.payload?.passwordReset,
      };
      state.error = undefined;
    },
    submitResetPasswordFailed: (
      state,
      action: PayloadAction<object | undefined>,
    ) => {
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
  getSecurityQuestionStarted,
  getSecurityQuestionFulfilled,
  getSecurityQuestionFailed,
  submitSecurityAnswerStarted,
  submitSecurityAnswerFulfilled,
  submitSecurityAnswerFailed,
  submitResetPasswordStarted,
  submitResetPasswordFulfilled,
  submitResetPasswordFailed,
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

export const getSecurityQuestion = (
  securityQuestionData: GetSecurityQuestionPayload,
): AppThunk => async dispatch => {
  try {
    dispatch(getSecurityQuestionStarted());

    const { data = {} }: any = await api.get(
      `/api/auth/get-security-question?username=${securityQuestionData.username}`,
    );

    dispatch(getSecurityQuestionFulfilled(data.data));

    return data.data;
  } catch (e) {
    dispatch(getSecurityQuestionFailed(e.message));

    throw e;
  }
};

export const submitSecurityAnswer = (
  securityAnswerData: submitSecurityAnswerPayload,
): AppThunk => async dispatch => {
  try {
    dispatch(submitSecurityAnswerStarted());

    const { data = {} }: any = await api.post(
      "/api/auth/submit-security-answer",
      securityAnswerData,
    );

    dispatch(submitSecurityAnswerFulfilled(data.data));

    return data.data;
  } catch (e) {
    dispatch(submitSecurityAnswerFailed(e.message));

    throw e;
  }
};

export const resetPassword = (
  resetPasswordData: submitResetPasswordPayload,
): AppThunk => async dispatch => {
  try {
    dispatch(submitResetPasswordStarted());

    const { data = {} }: any = await api.post(
      "/api/auth/reset-password",
      resetPasswordData,
    );

    dispatch(submitResetPasswordFulfilled(data.data));

    return data.data;
  } catch (e) {
    dispatch(submitResetPasswordFailed(e.message));

    throw e;
  }
};

export default forgotPasswordSlice;

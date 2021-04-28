import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../util/api";
import { AppThunk } from "../../store";

interface ForgotPasswordState {
  loading: boolean;
  data: object | undefined;
  error: any;
}

interface ForgotPasswordPayload {
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
      action: PayloadAction<object | undefined>,
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
  },
});

const {
  forgotPasswordStarted,
  forgotPasswordFulfilled,
  forgotPasswordFailed,
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

    return e;
  }
};

export default forgotPasswordSlice;

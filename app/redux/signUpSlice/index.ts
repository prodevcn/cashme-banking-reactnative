import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../util/api";
import { AppThunk } from "../../store";

interface SignUpData {
  sent?: boolean;
}

interface SignUpState {
  data: SignUpData | undefined;
  loading: boolean;
  error: any;
}

interface SignUpPayload {
  email: string;
  phoneNumber: string;
  gcd: string;
}

const initialState: SignUpState = {
  data: undefined,
  loading: false,
  error: undefined,
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    signUpStarted: state => {
      state.loading = true;
    },
    signUpFulfilled: (state, action: PayloadAction<object | undefined>) => {
      state.loading = false;
      state.data = action.payload;
    },
    signUpFailed: (state, action: PayloadAction<object | undefined>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { signUpStarted, signUpFulfilled, signUpFailed } = signUpSlice.actions;

export const signUp =
  (signUpData: SignUpPayload): AppThunk =>
  async dispatch => {
    try {
      dispatch(signUpStarted());

      const { data = {} }: any = await api.post(
        "/api/submit-document-mobile",
        signUpData,
      );

      dispatch(signUpFulfilled(data));

      return data.data;
    } catch (e) {
      dispatch(signUpFailed(e.message));

      throw e;
    }
  };

export default signUpSlice;

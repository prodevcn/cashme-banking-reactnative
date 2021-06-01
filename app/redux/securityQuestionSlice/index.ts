import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import api from "../../util/api";

interface SecurityQuestionData {
  questions: Array<any>;
}

interface SetSecurityQuestionPayload {
  id: number;
  answer: string;
}

interface ISecurityQuestionState {
  data?: SecurityQuestionData;
  loading: boolean;
  error: any;
}

const initialState: ISecurityQuestionState = {
  data: undefined,
  loading: false,
  error: undefined,
};

const securityQuestionSlice = createSlice({
  name: "securityQuestion",
  initialState,
  reducers: {
    securityQuestionFetchStart: state => {
      state.loading = true;
    },
    securityQuestionFetchSuccess: (
      state,
      action: PayloadAction<SecurityQuestionData>,
    ) => {
      state.loading = false;
      state.data = action.payload;
    },
    securityQuestionFetchFailure: (
      state,
      action: PayloadAction<object | undefined>,
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    setSecurityQuestionStart: state => {
      state.loading = true;
    },
    setSecurityQuestionSuccess: state => {
      state.loading = false;
      state.error = null;
    },
    setSecurityQuestionFailure: (
      state,
      action: PayloadAction<object | undefined>,
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Actions

const {
  securityQuestionFetchStart,
  securityQuestionFetchSuccess,
  securityQuestionFetchFailure,
  setSecurityQuestionStart,
  setSecurityQuestionSuccess,
  setSecurityQuestionFailure,
} = securityQuestionSlice.actions;

export const getSecurityQuestions = (): AppThunk => async dispatch => {
  try {
    dispatch(securityQuestionFetchStart());

    const { data } = await api.get("/api/security-questions");
    const securityQuestionData: SecurityQuestionData = data.data;

    dispatch(securityQuestionFetchSuccess(securityQuestionData));
    return securityQuestionData;
  } catch (e) {
    dispatch(securityQuestionFetchFailure(e.message));
  }
};

export const setSecurityQuestion = (
  setSecurityQuestionData: SetSecurityQuestionPayload,
): AppThunk => async dispatch => {
  try {
    dispatch(setSecurityQuestionStart());

    const { data } = await api.post(
      "/api/security-questions",
      setSecurityQuestionData,
    );

    dispatch(setSecurityQuestionSuccess());
    return data.data;
  } catch (e) {
    dispatch(setSecurityQuestionFailure(e.message));
  }
};

export default securityQuestionSlice;

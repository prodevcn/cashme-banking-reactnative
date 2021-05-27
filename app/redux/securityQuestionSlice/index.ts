import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import api from "../../util/api";

interface ISecurityQuestionState {
  data: Array<string> | undefined;
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
      action: PayloadAction<Array<string> | undefined>,
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
  },
});

// Actions

const {
  securityQuestionFetchStart,
  securityQuestionFetchSuccess,
  securityQuestionFetchFailure,
} = securityQuestionSlice.actions;

export const getSecurityQuestions = (): AppThunk => async dispatch => {
  try {
    dispatch(securityQuestionFetchStart());

    // TODO: Uncomment after finish API endpoints

    // const securityQuestions: ISecurityQuestionState = await (await api.get("/api/security-questions")).data;
    // dispatch(securityQuestionFetchSuccess(securityQuestions.data));
    // return securityQuestions.data;

    // Only for test
    const data = [
      "Lorem ipstem keate gories Lorem ipstem keate gories Lorem ipstem keate gories 1",
      "Lorem ipstem keate gories Lorem ipstem keate gories Lorem ipstem keate gories 2",
      "Lorem ipstem keate gories Lorem ipstem keate gories Lorem ipstem keate gories 3",
      "Lorem ipstem keate gories Lorem ipstem keate gories Lorem ipstem keate gories 4",
      "Lorem ipstem keate gories Lorem ipstem keate gories Lorem ipstem keate gories 5",
    ];
    dispatch(securityQuestionFetchSuccess(data));
    return data;
  } catch (e) {
    dispatch(securityQuestionFetchFailure(e.message));
  }
};

export default securityQuestionSlice;

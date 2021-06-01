import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../util/api";
import { AppThunk } from "../../store";

interface LoanState {
  data?: object;
  loading: boolean;
  error?: string;
}

interface LoanPayload {
  value: number;
}

const initialState: LoanState = {
  data: undefined,
  loading: false,
  error: undefined,
};

const loanSlice = createSlice({
  name: "loan",
  initialState,
  reducers: {
    getLoanStarted: state => {
      state.loading = true;
    },
    loanSuccess: state => {
      state.loading = false;
    },
    loanFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { getLoanStarted, loanSuccess, loanFailed } = loanSlice.actions;

export const getLoan = (loanData: LoanPayload): AppThunk => async dispatch => {
  try {
    dispatch(getLoanStarted());

    const { data = {} }: any = await api.post("/api/loan", loanData);

    dispatch(loanSuccess());

    return data;
  } catch (e) {
    dispatch(loanFailed(e.message));

    return e;
  }
};

export default loanSlice;

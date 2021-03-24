import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CommonState from "../../types/CommonStateInterface";

const initialState = {
  isLoading: false,
  error: {},
  message: "",
} as CommonState;

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.error = {};
      state.message = "";
      state.isLoading = true;
    },
    fetchSuccess: (state) => {
      state.error = {};
      state.message = "";
      state.isLoading = false;
    },
    fetchError: (state, action: PayloadAction<object>) => {
      state.error = action.payload;
      state.message = "";
      state.isLoading = false;
    },
    showMessage: (state, action: PayloadAction<string>) => {
      state.error = {};
      state.message = action.payload;
      state.isLoading = false;
    },
    hideMessage: (state) => {
      state.error = {};
      state.message = "";
      state.isLoading = false;
    },
  },
});

export default commonSlice;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommonState {
  isLoading: boolean;
  error: object | null;
  message: string;
}

const initialState: CommonState = {
  isLoading: false,
  error: null,
  message: "",
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    fetchStart: state => {
      state.error = null;
      state.message = "";
      state.isLoading = true;
    },
    fetchSuccess: state => {
      state.error = null;
      state.message = "";
      state.isLoading = false;
    },
    fetchError: (state, action: PayloadAction<object>) => {
      state.error = action.payload;
      state.message = "";
      state.isLoading = false;
    },
    showMessage: (state, action: PayloadAction<string>) => {
      state.error = null;
      state.message = action.payload;
      state.isLoading = false;
    },
    hideMessage: state => {
      state.error = null;
      state.message = "";
      state.isLoading = false;
    },
  },
});

export default commonSlice;

import { createSlice } from '@reduxjs/toolkit';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    error: "",
    loading: false,
    message: '',
  },
  reducers: {
    fetchStart: (state, action) => {
      state = {
        ...state,
        error: "",
        message: "",
        loading: true,
      };
    },
    fetchSuccess: (state, action) => {
      state = { ...state };
      state.error = "";
      state.message = "";
      state.loading = false;
    },
    fetchError: (state, action) => {
      state = { ...state };
      state.error = action.error;
      state.message = "";
      state.loading = false;
    },
    showMessage: (state, action) => {
      state = { ...state };
      state.error = "";
      state.message = action.message;
      state.loading = false;
    },
    hideMessage: (state, action) => {
      state = { ...state };
      state.error = "";
      state.message = "";
      state.loading = false;
    }
  },
});

export default commonSlice;

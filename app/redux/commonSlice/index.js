import { createSlice } from '@reduxjs/toolkit';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    error: null,
    loading: false,
    message: '',
  },
  reducers: {
    fetchStart: (state, action) => {
      state.error = null;
      state.message = "";
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.error = null;
      state.message = "";
      state.loading = false;
    },
    fetchError: (state, action) => {
      state.error = action.payload;
      state.message = "";
      state.loading = false;
    },
    showMessage: (state, action) => {
      state.error = null;
      state.message = action.payload;
      state.loading = false;
    },
    hideMessage: (state, action) => {
      state.error = null;
      state.message = "";
      state.loading = false;
    }
  },
});

export default commonSlice;

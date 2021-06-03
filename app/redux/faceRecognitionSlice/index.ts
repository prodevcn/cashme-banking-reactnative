import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import api from "../../util/api";

// TODO: change Data interface after make sure the API response data.

interface Data {
  success: boolean;
}

interface IFaceRecognitionState {
  data: any | undefined;
  loading: boolean;
  error: object | undefined;
}

const initialState: IFaceRecognitionState = {
  data: undefined,
  loading: false,
  error: undefined,
};

const faceRecognitionSlice = createSlice({
  name: "faceRecognition",
  initialState,
  reducers: {
    fetchStarted: state => {
      state.loading = true;
      state.error = undefined;
    },
    fetchFailed: (state, action: PayloadAction<object | undefined>) => {
      state.loading = false;
      state.error = action.payload;
    },
    faceRecognitionFulfilled: (
      state,
      action: PayloadAction<object | undefined>,
    ) => {
      state.loading = false;
      state.data = action.payload;
    },
    checkError: state => {
      state.error = undefined;
    },
  },
});

const { fetchStarted, fetchFailed, faceRecognitionFulfilled, checkError } =
  faceRecognitionSlice.actions;

export const sendFaceSnapshot =
  (uri: any): AppThunk =>
  async dispatch => {
    try {
      dispatch(fetchStarted());
      // TODO: add API call when integrate API
      // only for the test
      setTimeout(() => {
        const responseData: Data = { success: true };
        dispatch(faceRecognitionFulfilled(responseData));
        dispatch(fetchFailed({ error: "error" }));
      }, 3000);
    } catch (e) {
      dispatch(fetchFailed(e.message));
    }
  };

export const errorChecked = (): AppThunk => async dispatch => {
  dispatch(checkError());
};

export default faceRecognitionSlice;

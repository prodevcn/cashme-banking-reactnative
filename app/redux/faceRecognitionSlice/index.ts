import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import api from "../../util/api";

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
  },
});

const { fetchStarted, fetchFailed, faceRecognitionFulfilled } =
  faceRecognitionSlice.actions;

export const sendFaceSnapshot =
  (base64: any): AppThunk =>
  async dispatch => {
    try {
      dispatch(fetchStarted());

      const { data = {} }: any = await api.post("/api/check-liveness", {
        citizenImage: base64,
      });

      dispatch(faceRecognitionFulfilled(data));

      return data;
    } catch (e) {
      dispatch(fetchFailed(e.message));

      throw e;
    }
  };

export default faceRecognitionSlice;

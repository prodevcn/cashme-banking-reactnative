import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import api from "../../util/api";

interface ProfileState {
  loading: boolean;
  data: any | undefined;
  error: any | undefined;
}

const initialState: ProfileState = {
  loading: false,
  data: undefined,
  error: undefined,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    fetchProfileStarted: state => {
      state.loading = true;
    },
    fetchProfileFulfilled: (state, action: PayloadAction<ProfileState>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchProfileFailed: (state, action: PayloadAction<object | undefined>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const {
  fetchProfileStarted,
  fetchProfileFulfilled,
  fetchProfileFailed,
} = profileSlice.actions;

export const fetchProfile = (): AppThunk => async dispatch => {
  try {
    dispatch(fetchProfileStarted());

    const { data = {} }: any = await api.post("/api/profile");

    dispatch(fetchProfileFulfilled(data.data));

    return data.data;
  } catch (e) {
    dispatch(fetchProfileFailed(e.message));

    return e;
  }
};

export default profileSlice;

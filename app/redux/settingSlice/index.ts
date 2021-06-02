import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";

interface SettingState {
  hasInternetConnection: boolean;
}

const initialState: SettingState = {
  hasInternetConnection: true,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setInternetConnectionSuccess: (state, action: PayloadAction<boolean>) => {
      state.hasInternetConnection = action.payload;
    },
  },
});

const { setInternetConnectionSuccess } = settingSlice.actions;

export const setHasInternetConnection =
  (hasConnection: boolean): AppThunk =>
  async dispatch => {
    dispatch(setInternetConnectionSuccess(hasConnection));
  };

export default settingSlice;

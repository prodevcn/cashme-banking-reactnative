import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import logger from "redux-logger";
import commonSlice from "../redux/commonSlice";
import authSlice from "../redux/authSlice";
import notificationSlice from "../redux/notificationSlice";
import settingSlice from "../redux/settingSlice";
import profileSlice from "../redux/profileSlice";

const store = configureStore({
  reducer: {
    common: commonSlice.reducer,
    auth: authSlice.reducer,
    notification: notificationSlice.reducer,
    setting: settingSlice.reducer,
    profile: profileSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

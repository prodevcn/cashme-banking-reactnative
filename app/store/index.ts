import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import logger from "redux-logger";
import commonSlice from "../redux/commonSlice";
import permissionSlice from "../redux/permissionSlice";
import authSlice from "../redux/authSlice";
import notificationSlice from "../redux/notificationSlice";

const store = configureStore({
  reducer: {
    common: commonSlice.reducer,
    permission: permissionSlice.reducer,
    auth: authSlice.reducer,
    notification: notificationSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

import { Action, configureStore, getDefaultMiddleware, Middleware, ThunkAction } from "@reduxjs/toolkit";
import logger from "redux-logger";
import commonSlice from "../redux/commonSlice";
import permissionSlice from "../redux/permissionSlice";
import authSlice from "../redux/authSlice";

const middleware: Array<Middleware> = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    common: commonSlice.reducer,
    permission: permissionSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: [...middleware, logger]
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
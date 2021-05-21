import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import logger from "redux-logger";
import commonSlice from "../redux/commonSlice";
import authSlice from "../redux/authSlice";
import forgotPasswordSlice from "../redux/forgotPasswordSlice";
import notificationSlice from "../redux/notificationSlice";
import settingSlice from "../redux/settingSlice";
import profileSlice from "../redux/profileSlice";
import categorySlice from "../redux/categorySlice";
import productSlice from "../redux/productSlice";
import signUpSlice from "../redux/signUpSlice";
import cashMeSlice from "../redux/cashMeSlice";

const store = configureStore({
  reducer: {
    common: commonSlice.reducer,
    auth: authSlice.reducer,
    forgotPassword: forgotPasswordSlice.reducer,
    notification: notificationSlice.reducer,
    setting: settingSlice.reducer,
    profile: profileSlice.reducer,
    category: categorySlice.reducer,
    product: productSlice.reducer,
    signUp: signUpSlice.reducer,
    cashMe: cashMeSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

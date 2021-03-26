import { configureStore, getDefaultMiddleware, Middleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import commonSlice from "../redux/commonSlice";
import permissionSlice from "../redux/permissionSlice";
import authSlice from "../redux/authSlice";

const middleware: Array<Middleware> = getDefaultMiddleware();

export default configureStore({
  reducer: {
    common: commonSlice.reducer,
    permission: permissionSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: [...middleware, logger]
});

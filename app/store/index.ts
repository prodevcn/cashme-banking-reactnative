import { configureStore, getDefaultMiddleware, Middleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import commonSlice from '../redux/commonSlice';

const middleware: Array<Middleware> = getDefaultMiddleware();

export default configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
  middleware: [...middleware, logger]
});

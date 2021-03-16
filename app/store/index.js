import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from "redux-logger";
import commonSlice from '../redux/commonSlice';

const middleware = getDefaultMiddleware();

export default configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
  middleware: [...middleware, logger]
});

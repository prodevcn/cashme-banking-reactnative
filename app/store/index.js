import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from "redux-logger";
import commonSlice from '../features/common/commonSlice';

const middleware = getDefaultMiddleware();

export default configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
  middleware: [...middleware, logger]
});

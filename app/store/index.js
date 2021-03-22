import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from "redux-logger";
import commonSlice from '../redux/commonSlice';
import permissionSlice from '../redux/permissionSlice';
import notificationSlice from '../redux/notificationSlice';

const middleware = getDefaultMiddleware();

export default configureStore({
  reducer: {
    common: commonSlice.reducer,
    permissionSlice: permissionSlice.reducer,
    notification: notificationSlice.reducer,
  },
  middleware: [...middleware, logger]
});

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { getNotificationsPermission } from "../permissionSlice";
import commonSlice from "../commonSlice";
import { isAndroid } from "../../helpers/platform";
import { AppThunk } from "../../store";

interface NotificationState {
  expoPushToken: string;
  current: object | null;
  data: object | null;
}

const initialState: NotificationState = {
  expoPushToken: "",
  current: null,
  data: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    tokenSuccess: (state, action: PayloadAction<string>) => {
      state.expoPushToken = action.payload;
    },
    notificationSuccess: (state, action: PayloadAction<object>) => {
      state.current = action.payload;
    },
    dataSuccess: (state, action: PayloadAction<object>) => {
      state.current = action.payload;
    },
  },
});

// Actions
const { fetchStart, fetchSuccess, fetchError } = commonSlice.actions;
const { notificationSuccess } = notificationSlice.actions;

export const registerForPushNotifications = (): AppThunk => async (
  dispatch,
  getState,
) => {
  try {
    dispatch(fetchStart());

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    if (Constants.isDevice) {
      await dispatch(getNotificationsPermission());
      const { permission } = getState();
      const { notificationsPermission } = permission.data;

      if (!notificationsPermission) {
        alert("Failed to get push token for push notification!");
        return;
      }

      const token = (await Notifications.getExpoPushTokenAsync()).data;
      dispatch(notificationSuccess({ expoPushToken: token }));
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (isAndroid) {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    dispatch(fetchSuccess());
  } catch (e) {
    dispatch(fetchError(e));
  }
};

export default notificationSlice;

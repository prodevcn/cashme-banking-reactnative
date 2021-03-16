import { Platform } from "react-native";
import { createSlice } from '@reduxjs/toolkit';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { getNotificationsPermission } from '../permissionSlice';
import commonSlice from '../commonSlice';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        data: {
            expoPushToken: null,
            notification: {},
        }
    },
    reducers: {
        notificationSuccess: (state, action) => {
            state.data = {
                ...state.data,
                ...action.payload,
            };
        }
    },
});

// Actions
const {
    fetchStart,
    fetchSuccess,
    fetchError,
} = commonSlice.actions;

const {
    notificationSuccess,
} = notificationSlice.actions;

export const registerForPushNotifications = () => async (dispatch, getState) => {
    try {
        dispatch(fetchStart());
        let token = null;

        if (Constants.isDevice) {
            dispatch(getNotificationsPermission()).then(async () => {
                const { permission } = getState();
                const { notificationsPermission } = permission.data;

                if (!notificationsPermission) {
                    alert('Failed to get push token for push notification!');
                    return;
                }

                token = (await Notifications.getExpoPushTokenAsync()).data;

                dispatch(notificationSuccess({ expoPushToken: token }));

                Notifications.addNotificationReceivedListener((notification) => {
                    dispatch(notificationSuccess({ notification }));
                });

                Notifications.addNotificationResponseReceivedListener((response) => {
                    // onNotificationClickHandler
                });
            }).catch(e => {
                dispatch(fetchError(e));
            });
        } else {
            alert('Must use physical device for Push Notifications');
        }

        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }

        dispatch(fetchSuccess());
    } catch (e) {
        dispatch(fetchError(e));
    }
};

export default notificationSlice;
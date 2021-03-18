import { createSlice } from '@reduxjs/toolkit';
import * as Permissions from 'expo-permissions';
import commonSlice from '../commonSlice';
import { getPermissionStatus } from '../../helpers/permission';

const permissionSlice = createSlice({
    name: 'permission',
    initialState: {
        data: {
            notificationsPermission: false,
            userFacingNotificationsPermission: false,
            locationPermission: false,
            cameraPermission: false,
            audioRecordingPermission: false,
            contactsPermission: false,
            mediaLibraryPermission: false,
            mediaLibraryWriteOnlyPermission: false,
            calendarPermission: false,
            remindersPermission: false,
            systemBrightnessPermission: false,
            motionPermission: false,
        },
    },
    reducers: {
        permissionSuccess: (state, action) => {
            state.data = {
                ...state.data,
                ...action.payload,
            };
        }
    },
});

// Actions
const {
    fetchError,
} = commonSlice.actions;

const {
    permissionSuccess,
} = permissionSlice.actions;

export const getNotificationsPermission = () => async (dispatch, getState) => {
    try {
        const granted = await getPermissionStatus(Permissions.NOTIFICATIONS);
        dispatch(permissionSuccess({ notificationsPermission: granted }));
    } catch (e) {
        dispatch(fetchError({ error: e }));
    }
};

export const getUserFacingNotificationsPermission = () => async (dispatch, getState) => {
    try {
        const granted = await getPermissionStatus(Permissions.USER_FACING_NOTIFICATIONS);
        dispatch(permissionSuccess({ userFacingNotificationsPermission: granted }));
    } catch (e) {
        dispatch(fetchError({ error: e }));
    }
};

export const getLocationPermission = () => async (dispatch, getState) => {
    try {
        const granted = await getPermissionStatus(Permissions.LOCATION);
        dispatch(permissionSuccess({ locationPermission: granted }));
    } catch (e) {
        dispatch(fetchError({ error: e }));
    }
};

export const getCameraPermission = () => async (dispatch, getState) => {
    try {
        const granted = await getPermissionStatus(Permissions.CAMERA);
        dispatch(permissionSuccess({ cameraPermission: granted }));
    } catch (e) {
        dispatch(fetchError({ error: e }));
    }
};

export const getAudioRecordingPermission = () => async (dispatch, getState) => {
    try {
        const granted = await getPermissionStatus(Permissions.AUDIO_RECORDING);
        dispatch(permissionSuccess({ audioRecordingPermission: granted }));
    } catch (e) {
        dispatch(fetchError({ error: e }));
    }
};

export const getContactsPermission = () => async (dispatch, getState) => {
    try {
        const granted = await getPermissionStatus(Permissions.CONTACTS);
        dispatch(permissionSuccess({ contactsPermission: granted }));
    } catch (e) {
        dispatch(fetchError({ error: e }));
    }
};

export const getMediaLibraryPermission = () => async (dispatch, getState) => {
    try {
        const granted = await getPermissionStatus(Permissions.MEDIA_LIBRARY);
        dispatch(permissionSuccess({ mediaLibraryPermission: granted }));
    } catch (e) {
        dispatch(fetchError({ error: e }));
    }
};

export const getMediaLibraryWriteOnlyPermission = () => async (dispatch, getState) => {
    try {
        const granted = await getPermissionStatus(Permissions.MEDIA_LIBRARY_WRITE_ONLY);
        dispatch(permissionSuccess({ mediaLibraryWriteOnlyPermission: granted }));
    } catch (e) {
        dispatch(fetchError({ error: e }));
    }
};

export const getCalendarPermission = () => async (dispatch, getState) => {
    try {
        const granted = await getPermissionStatus(Permissions.CALENDAR);
        dispatch(permissionSuccess({ calendarPermission: granted }));
    } catch (e) {
        dispatch(fetchError({ error: e }));
    }
};

export const getRemindersPermission = () => async (dispatch, getState) => {
    try {
        const granted = await getPermissionStatus(Permissions.REMINDERS);
        dispatch(permissionSuccess({ remindersPermission: granted }));
    } catch (e) {
        dispatch(fetchError({ error: e }));
    }
};

export const getSystemBrightnessPermission = () => async (dispatch, getState) => {
    try {
        const granted = await getPermissionStatus(Permissions.SYSTEM_BRIGHTNESS);
        dispatch(permissionSuccess({ systemBrightnessPermission: granted }));
    } catch (e) {
        dispatch(fetchError({ error: e }));
    }
};

// The permission for accessing DeviceMotion and DeviceOrientation in the web browser.
export const getMotionPermission = () => async (dispatch, getState) => {
    try {
        const granted = await getPermissionStatus(Permissions.MOTION);
        dispatch(permissionSuccess({ motionPermission: granted }));
    } catch (e) {
        dispatch(fetchError({ error: e }));
    }
};

export default permissionSlice;
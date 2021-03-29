import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as Permissions from "expo-permissions";
import commonSlice from "../commonSlice";
import { getPermissionStatus } from "../../helpers/permission";
import { AppDispatch, AppThunk } from "../../store";

interface PermissionState {
  data: {
    notificationsPermission: boolean;
    userFacingNotificationsPermission: boolean;
    locationPermission: boolean;
    cameraPermission: boolean;
    audioRecordingPermission: boolean;
    contactsPermission: boolean;
    mediaLibraryPermission: boolean;
    mediaLibraryWriteOnlyPermission: boolean;
    calendarPermission: boolean;
    remindersPermission: boolean;
    systemBrightnessPermission: boolean;
    motionPermission: boolean;
  };
}

const initialState: PermissionState = {
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
};

const permissionSlice = createSlice({
  name: "permission",
  initialState,
  reducers: {
    permissionSuccess: (state, action: PayloadAction<object>): void => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
  },
});

// Actions
const { fetchError } = commonSlice.actions;
const { permissionSuccess } = permissionSlice.actions;

export const getNotificationsPermission = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const granted: boolean = await getPermissionStatus(Permissions.NOTIFICATIONS);
    dispatch(permissionSuccess({ notificationsPermission: granted }));
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const getUserFacingNotificationsPermission = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const granted: boolean = await getPermissionStatus(Permissions.USER_FACING_NOTIFICATIONS);
    dispatch(permissionSuccess({ userFacingNotificationsPermission: granted }));
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const getLocationPermission = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const granted: boolean = await getPermissionStatus(Permissions.LOCATION);
    dispatch(permissionSuccess({ locationPermission: granted }));
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const getCameraPermission = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const granted: boolean = await getPermissionStatus(Permissions.CAMERA);
    dispatch(permissionSuccess({ cameraPermission: granted }));
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const getAudioRecordingPermission = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const granted: boolean = await getPermissionStatus(Permissions.AUDIO_RECORDING);
    dispatch(permissionSuccess({ audioRecordingPermission: granted }));
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const getContactsPermission = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const granted: boolean = await getPermissionStatus(Permissions.CONTACTS);
    dispatch(permissionSuccess({ contactsPermission: granted }));
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const getMediaLibraryPermission = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const granted: boolean = await getPermissionStatus(Permissions.MEDIA_LIBRARY);
    dispatch(permissionSuccess({ mediaLibraryPermission: granted }));
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const getMediaLibraryWriteOnlyPermission = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const granted: boolean = await getPermissionStatus(
      Permissions.MEDIA_LIBRARY_WRITE_ONLY
    );
    dispatch(permissionSuccess({ mediaLibraryWriteOnlyPermission: granted }));
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const getCalendarPermission = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const granted: boolean = await getPermissionStatus(Permissions.CALENDAR);
    dispatch(permissionSuccess({ calendarPermission: granted }));
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const getRemindersPermission = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const granted: boolean = await getPermissionStatus(Permissions.REMINDERS);
    dispatch(permissionSuccess({ remindersPermission: granted }));
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export const getSystemBrightnessPermission = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const granted: boolean = await getPermissionStatus(Permissions.SYSTEM_BRIGHTNESS);
    dispatch(permissionSuccess({ systemBrightnessPermission: granted }));
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

// The permission for accessing DeviceMotion and DeviceOrientation in the web browser.
export const getMotionPermission = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const granted: boolean = await getPermissionStatus(Permissions.MOTION);
    dispatch(permissionSuccess({ motionPermission: granted }));
  } catch (e) {
    dispatch(fetchError({ error: e }));
  }
};

export default permissionSlice;

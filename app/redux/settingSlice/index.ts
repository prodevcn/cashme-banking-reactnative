import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import commonSlice from "../commonSlice";
import { AppThunk } from "../../store";
import * as LocalAuthentication from "expo-local-authentication";
import { PIN, FINGERPRINT, FACE_ID } from "../../constants";

interface LocalAuth {
  method?: string | null;
  hasHardware: boolean;
  isEnrolled: boolean;
  supportedAuthenticationTypes: Array<LocalAuthentication.AuthenticationType>;
}

interface SettingState {
  localAuth: LocalAuth;
}

const initialState: SettingState = {
  localAuth: {
    method: null,
    hasHardware: false,
    isEnrolled: false,
    supportedAuthenticationTypes: [],
  },
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    localAuthSuccess: (state, action: PayloadAction<LocalAuth>) => {
      state.localAuth = { ...action.payload };
    },
    switchToPinAuth: state => {
      state.localAuth.method = PIN;
    },
    switchToFingerprintAuth: state => {
      state.localAuth.method = FINGERPRINT;
    },
    switchToFaceIdAuth: state => {
      state.localAuth.method = FACE_ID;
    },
  },
});

// Actions
const { fetchError } = commonSlice.actions;
const { localAuthSuccess } = settingSlice.actions;

export const loadLocalAuthSettings = (): AppThunk => async dispatch => {
  try {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    /* 
    Returned values indicates the following supported biometrics:
    1: Fingerprint,
    2: Facial recognition, 
    3: Iris recognition (Android-only). 
    Devices can support multiple authentication methods- i.e. [1,2] means the device supports 
    both fingerprint and facial recognition. If none are supported, this method returns an empty array. 
    */
    const supportedAuthenticationTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();

    dispatch(
      localAuthSuccess({
        hasHardware,
        isEnrolled,
        supportedAuthenticationTypes,
      }),
    );
  } catch (e) {
    dispatch(fetchError(e));
  }
};

export const requestLocalAuth = (): AppThunk => async dispatch => {
  try {
    const res = await LocalAuthentication.authenticateAsync();
    // TODO: Based on requirements
  } catch (e) {
    dispatch(fetchError(e));
  }
};

export default settingSlice;

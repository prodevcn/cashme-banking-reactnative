import { IntentLauncher } from "expo";
import { Linking, Platform } from "react-native";

export const isIos: boolean = Platform.OS === "ios";
export const isAndroid: boolean = Platform.OS === "android";

export const openMobileSettings = () => {
  if (isIos) {
    Linking.openSettings();
  } else {
    IntentLauncher.startActivityAsync(IntentLauncher.ACTION_SECURITY_SETTINGS);
  }
};

import ReactNativeBiometrics from "react-native-biometrics";
import Storage from "../util/storage";
import { DISMISS_SECURITY_OVERLAY, IDENTIFIER } from "../constants";

export const createKeys = async () => {
  const { publicKey } = await ReactNativeBiometrics.createKeys();

  return publicKey;
};

export const promptBiometrics = async (text: string) => {
  const { success } = await ReactNativeBiometrics.simplePrompt({
    promptMessage: text,
  });

  return success;
};

export const hasSensor = async () => {
  const { available } = await ReactNativeBiometrics.isSensorAvailable();

  return available;
};

export const deleteKeys = async () => {
  await ReactNativeBiometrics.deleteKeys();
};

export const getBiometricsUsername = async () => {
  const hasKey = await hasPrivateKey();

  if (!hasKey) {
    return;
  }

  return await getUsername();
};

export const enableBiometrics = async (username: string) => {
  const publicKey = await createKeys();
  await setUsername(username);

  return publicKey;
};

export const hasPrivateKey = async () => {
  const resultObject = await ReactNativeBiometrics.biometricKeysExist();
  const { keysExist } = resultObject;

  return keysExist;
};

export const signMessage = async (text: string) => {
  const epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
  const message = epochTimeSeconds + "some message";

  const { signature = "" } = await ReactNativeBiometrics.createSignature({
    promptMessage: text,
    payload: message,
  });

  return { signature, message };
};

export const setUsername = async (username: string) => {
  return await Storage.setItem({
    key: IDENTIFIER,
    value: username,
  });
};

export const getUsername = async () => {
  return await Storage.getItem({
    key: IDENTIFIER,
  });
};

export const isBiometricsDismissed = async () => {
  return Storage.getItem({ key: DISMISS_SECURITY_OVERLAY });
};

export const dismissBiometrics = async () => {
  await Storage.setItem({
    key: DISMISS_SECURITY_OVERLAY,
    value: true,
  });
};

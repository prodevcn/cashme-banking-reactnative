import ReactNativeBiometrics from "react-native-biometrics";
import PubSub from "pubsub-js";
import Storage from "../util/storage";
import {
  AUTH_TYPE,
  AUTH_TYPES,
  DISMISS_SECURITY_OVERLAY,
  IDENTIFIER,
  PIN_KEY,
} from "../constants";

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

export const enableBiometrics = async () => {
  const publicKey = await createKeys();
  await setAuthType(AUTH_TYPES.BIOMETRICS);

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

export const setPin = async (pin: string) => {
  return await Storage.setItem({
    key: PIN_KEY,
    value: pin,
    encrypted: true,
  });
};

export const getPin = async () => {
  return await Storage.getItem({
    key: PIN_KEY,
    encrypted: true,
  });
};

type PinPayload = {
  success: boolean;
  payload: string;
};
export const promptPin = async () => {
  return new Promise<PinPayload>((resolve, reject) => {
    PubSub.publish(PIN_KEY, (success: boolean, payload: string) => {
      success ? resolve({ success, payload }) : reject({ success, payload });
    });
  });
};

export const enablePin = async (pin: string) => {
  await setPin(pin);
  await setAuthType(AUTH_TYPES.BIOMETRICS);
};

export const setAuthType = async (type: string) => {
  return await Storage.setItem({
    key: AUTH_TYPE,
    value: type,
  });
};

export const getAuthType = async () => {
  return await Storage.getItem({
    key: AUTH_TYPE,
  });
};

export const isLocalAuthEnabled = async () => {
  const type = await getAuthType();

  return !!type;
};

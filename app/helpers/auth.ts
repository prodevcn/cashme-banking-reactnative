import ReactNativeBiometrics from "react-native-biometrics";
import Storage from "../util/storage";
import { TOKEN } from "../constants";

export const setToken = async (token: string) => {
  await Storage.setItem({ key: TOKEN, value: token, encrypted: true });
};

export const getToken = async () => {
  return await Storage.getItem({ key: TOKEN, encrypted: true });
};

export const removeToken = async () => {
  await Storage.removeItem({ key: TOKEN, encrypted: true });
};

export const isAuthenticated = () => !!getToken();

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
    key: TOKEN,
    value: username,
    encrypted: true,
  });
};

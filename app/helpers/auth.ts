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

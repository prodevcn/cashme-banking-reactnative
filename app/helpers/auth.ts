import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN } from "../constants";

export const setToken = async (token: string): Promise<void> => {
  await AsyncStorage.setItem(TOKEN, token);
};

export const getToken = async (): Promise<string | null> => {
  return await AsyncStorage.getItem(TOKEN);
};

export const removeToken = async (): Promise<void> => {
  await AsyncStorage.removeItem(TOKEN);
};

export const isAuthenticated = () => !!getToken();

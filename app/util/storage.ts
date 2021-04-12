import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

export interface StorageSetterArgs {
  key: string;
  value: string;
  encrypted?: boolean;
}

export interface StorageGetterArgs {
  key: string;
  encrypted?: boolean;
}

export default class Storage {
  static async setItem(storageArgs: StorageSetterArgs) {
    const { key, value, encrypted = false } = storageArgs;
    const json = JSON.stringify(value);

    if (encrypted) {
      await SecureStore.setItemAsync(key, json);
    } else {
      await AsyncStorage.setItem(key, json);
    }
  }

  static async getItem(storageArgs: StorageGetterArgs) {
    const { key, encrypted = false } = storageArgs;

    if (encrypted) {
      const encData = await SecureStore.getItemAsync(key);
      return encData ? JSON.parse(encData) : encData;
    } else {
      const data = await AsyncStorage.getItem(key);
      return data ? JSON.parse(data) : data;
    }
  }

  static async removeItem(storageArgs: StorageGetterArgs) {
    const { key, encrypted = false } = storageArgs;

    if (encrypted) {
      return await SecureStore.deleteItemAsync(key);
    } else {
      return await AsyncStorage.removeItem(key);
    }
  }

  static async clear() {
    await AsyncStorage.clear();
  }
}

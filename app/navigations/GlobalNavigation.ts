import { NavigationContainerRef } from "@react-navigation/native";

let _navigator: NavigationContainerRef | null;

export const setGlobalNavigator = (ref: NavigationContainerRef | null) => {
  _navigator = ref;
};

export function navigate(name: string, params?: object) {
  _navigator?.navigate(name, params);
}

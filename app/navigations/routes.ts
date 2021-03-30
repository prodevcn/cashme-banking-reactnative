import { StackNavigationOptions } from "@react-navigation/stack";
import { ComponentType } from "react";
import { SIGN_IN_SCREEN } from "../constants";
import SignInScreen from "../screens/Auth/SignIn";

interface Routes {
  name: string;
  component: ComponentType;
  options?: StackNavigationOptions;
}

export const nonAuthenticatedStackScreens: Array<Routes> = [
  {
    name: SIGN_IN_SCREEN,
    component: SignInScreen,
    options: { title: "Sign In" },
  },
];

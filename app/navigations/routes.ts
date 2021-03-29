import { StackNavigationOptions } from "@react-navigation/stack";
import { ComponentType } from "react";
import { SIGN_IN_SCREEN } from "../constants";
import SignIn from "../screens/Auth/SignIn";

interface Routes {
  name: string;
  component: ComponentType;
  options?: StackNavigationOptions;
}

export const nonAuthenticatedStackScreens: Array<Routes> = [
  {
    name: SIGN_IN_SCREEN,
    component: SignIn,
    options: { title: "Sign In" },
  },
];

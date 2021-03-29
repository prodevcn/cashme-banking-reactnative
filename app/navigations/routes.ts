import { StackNavigationOptions } from "@react-navigation/stack";
import { ComponentType } from "react";
import {
  SIGN_IN_SCREEN,
  SPLASH_SCREEN,
  PRODUCTS_SCREEN,
  TERMS_SCREEN,
  HELP_SCREEN,
} from "../constants";
import SignIn from "../screens/Auth/SignIn";
import Help from "../screens/Help";
import Products from "../screens/Products";
import Splash from "../screens/Splash";
import Terms from "../screens/Terms";

interface Routes {
  name: string;
  component: ComponentType;
  options?: StackNavigationOptions;
}

export const commonScreens: Array<Routes> = [
  { name: SPLASH_SCREEN, component: Splash, options: { title: "Home" } },
  {
    name: PRODUCTS_SCREEN,
    component: Products,
    options: { title: "Products" },
  },
  { name: TERMS_SCREEN, component: Terms, options: { title: "Terms" } },
  { name: HELP_SCREEN, component: Help, options: { title: "Help" } },
];

export const authScreens: Array<Routes> = [
  {
    name: SIGN_IN_SCREEN,
    component: SignIn,
    options: { title: "Sign In" },
  },
];

import { StackNavigationOptions } from "@react-navigation/stack";
import { ComponentType } from "react";
import {
  HOME_SCREEN,
  PRODUCTS_SCREEN,
  HELP_SCREEN,
  NO_CONNECTION,
  FORGOT_PASSWORD,
  RESET_PIN,
  SECURITY_SETTINGS,
  PASSWORD_RECOVER_CODE,
} from "../constants";
import Help from "../screens/Help";
import Products from "../screens/Products";
import Home from "../screens/Home";
import NoConnection from "../screens/NoConnection";
import ForgotPassword from "../screens/ForgotPassword";
import ResetPin from "../screens/ResetPin";
import SecuritySettings from "../screens/SecuritySettings";
import PasswordRecoverCode from "../screens/PasswordRecoverCode";

interface Route {
  name: string;
  component: ComponentType;
  options?: StackNavigationOptions;
}

export const commonScreens: Array<Route> = [
  {
    name: HOME_SCREEN,
    component: Home,
    options: { title: "Home" },
  },
  {
    name: PRODUCTS_SCREEN,
    component: Products,
    options: { title: "Products" },
  },
  {
    name: HELP_SCREEN,
    component: Help,
    options: { title: "Help" },
  },
];

export const authScreens: Array<Route> = [
  {
    name: FORGOT_PASSWORD,
    component: ForgotPassword,
    options: { headerShown: false },
  },
  {
    name: PASSWORD_RECOVER_CODE,
    component: PasswordRecoverCode,
    options: { headerShown: false },
  },
];

export const noConnectionScreen: Route = {
  name: NO_CONNECTION,
  component: NoConnection,
  options: { headerShown: false },
};

export const resetPinScreen: Route = {
  name: RESET_PIN,
  component: ResetPin,
  options: { headerShown: false },
};

export const securitySettingsScreen: Route = {
  name: SECURITY_SETTINGS,
  component: SecuritySettings,
  options: { headerShown: false },
};

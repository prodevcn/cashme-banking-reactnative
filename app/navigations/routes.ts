import { StackNavigationOptions } from "@react-navigation/stack";
import { ComponentType } from "react";
import i18n from "../i18n";
import {
  HOME_SCREEN,
  CATEGORIES_SCREEN,
  HELP_SCREEN,
  NO_CONNECTION,
  FORGOT_PASSWORD,
  RESET_PIN,
  SECURITY_SETTINGS,
  PASSWORD_RECOVER_CODE,
  FINANCE,
  PROFILE_SCREEN,
  SECURITY_QUESTION,
  RESET_PASSWORD,
  SIGN_UP,
} from "../constants";
import Help from "../screens/Help";
import Categories from "../screens/Categories";
import Home from "../screens/Home";
import NoConnection from "../screens/NoConnection";
import ForgotPassword from "../screens/ForgotPassword";
import ResetPin from "../screens/ResetPin";
import SecuritySettings from "../screens/SecuritySettings";
import PasswordRecoverCode from "../screens/PasswordRecoverCode";
import Finance from "../screens/Products/Finance";
import Profile from "../screens/Profile";
import SecurityQuestion from "../screens/SecurityQuestion";
import ResetPassword from "../screens/ResetPassword";
import SignUp from "../screens/SignUp";

interface Route {
  name: string;
  component: ComponentType;
  options?: StackNavigationOptions;
}

export const nonAuthBottomTabScreens: Array<Route> = [
  {
    name: HOME_SCREEN,
    component: Home,
    options: { title: "Home" },
  },
  {
    name: CATEGORIES_SCREEN,
    component: Categories,
    options: { title: i18n.t("categories") },
  },
  {
    name: HELP_SCREEN,
    component: Help,
    options: { title: "Help" },
  },
];

export const authBottomTabScreens: Array<Route> = [
  {
    name: HOME_SCREEN,
    component: Home,
    options: { title: "Home" },
  },
  {
    name: CATEGORIES_SCREEN,
    component: Categories,
    options: { title: i18n.t("categories") },
  },
  {
    name: PROFILE_SCREEN,
    component: Profile,
    options: { title: i18n.t("profile") },
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
  {
    name: SECURITY_QUESTION,
    component: SecurityQuestion,
    options: { headerShown: false },
  },
  {
    name: RESET_PASSWORD,
    component: ResetPassword,
    options: { headerShown: false },
  },
  {
    name: SIGN_UP,
    component: SignUp,
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

export const productScreens: Array<Route> = [
  {
    name: FINANCE,
    component: Finance,
    options: { title: "Finance", headerShown: false },
  },
];

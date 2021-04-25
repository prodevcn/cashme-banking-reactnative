import { StackNavigationOptions } from "@react-navigation/stack";
import { ComponentType } from "react";
import {
  HOME_SCREEN,
  PRODUCTS_SCREEN,
  HELP_SCREEN,
  NO_CONNECTION,
} from "../constants";
import Help from "../screens/Help";
import Products from "../screens/Products";
import Home from "../screens/Home";
import NoConnection from "../screens/NoConnection";

interface Routes {
  name: string;
  component: ComponentType;
  options?: StackNavigationOptions;
}

export const commonScreens: Array<Routes> = [
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

// If there is no connection
export const noConnectionScreen: Routes = {
  name: NO_CONNECTION,
  component: NoConnection,
  options: { title: "Net Info", headerShown: false },
};

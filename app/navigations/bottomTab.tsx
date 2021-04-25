import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import AnimatedTabBar, {
  TabsConfig,
  BubbleTabBarItemConfig,
} from "@gorhom/animated-tabbar";
import { commonScreens } from "./routes";
import Help from "../assets/images/tabs/help.svg";
import HelpFill from "../assets/images/tabs/help_fill.svg";
import Home from "../assets/images/tabs/home.svg";
import HomeFill from "../assets/images/tabs/home_fill.svg";
import Product from "../assets/images/tabs/product.svg";
import ProductFill from "../assets/images/tabs/product_fill.svg";

const BottomTab = createBottomTabNavigator();

export function NonAuthenticatedScreens() {
  return (
    <BottomTab.Navigator
      tabBar={props => (
        <AnimatedTabBar
          tabs={renderTabs(props.state)}
          duration={1200}
          iconSize={25}
          itemContainerWidth="fill"
          itemInnerSpace={13}
          itemOuterSpace={10}
          {...props}
        />
      )}
    >
      {commonScreens.map(screen => (
        <BottomTab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </BottomTab.Navigator>
  );
}

function renderTabs(state: TabNavigationState<ParamListBase>) {
  const defaultTabs = {
    labelStyle: {
      color: "#1B8CF4",
    },
    background: {
      activeColor: "#EBF6FF",
      inactiveColor: "rgba(223,215,243,0)",
    },
  };

  const defaultIconStyles = {
    activeColor: "rgba(91,55,183,1)",
    inactiveColor: "rgba(0,0,0,1)",
  };

  const tabs: TabsConfig<BubbleTabBarItemConfig> = {
    HOME_SCREEN: {
      ...defaultTabs,
      icon: {
        ...defaultIconStyles,
        component: () => (state.index === 0 ? <HomeFill /> : <Home />),
      },
    },
    PRODUCTS_SCREEN: {
      ...defaultTabs,
      icon: {
        ...defaultIconStyles,
        component: () => (state.index === 1 ? <ProductFill /> : <Product />),
      },
    },
    HELP_SCREEN: {
      ...defaultTabs,
      icon: {
        ...defaultIconStyles,
        component: () => (state.index === 2 ? <HelpFill /> : <Help />),
      },
    },
  };

  return tabs;
}

import React from "react";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import AnimatedTabBar, {
  TabsConfig,
  BubbleTabBarItemConfig,
} from "@gorhom/animated-tabbar";
import { nonAuthBottomTabScreens, authBottomTabScreens } from "./routes";
import { RootState } from "../store/index";
import {
  HOME_SCREEN,
  CATEGORIES_SCREEN,
  HELP_SCREEN,
  PROFILE_SCREEN,
} from "../constants/screens";

import Help from "../assets/images/tabs/help.svg";
import HelpFill from "../assets/images/tabs/help_fill.svg";
import Home from "../assets/images/tabs/home.svg";
import HomeFill from "../assets/images/tabs/home_fill.svg";
import Product from "../assets/images/tabs/product.svg";
import ProductFill from "../assets/images/tabs/product_fill.svg";
import ProfileIcon from "../components/ProfileIcon";

const BottomTab = createBottomTabNavigator();

export function NonAuthenticatedScreens() {
  const { token, data } = useSelector((state: RootState) => state.auth);

  return (
    <BottomTab.Navigator
      tabBar={props => (
        <AnimatedTabBar
          tabs={
            !token
              ? renderNonAuthScreenTabs(props.state)
              : renderAuthScreenTabs(props.state, data?.uri)
          }
          duration={1200}
          iconSize={25}
          itemContainerWidth="fill"
          itemInnerSpace={13}
          itemOuterSpace={10}
          {...props}
        />
      )}
    >
      {!token
        ? nonAuthBottomTabScreens.map(screen => (
            <BottomTab.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
              options={screen.options}
            />
          ))
        : authBottomTabScreens.map(screen => (
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

function renderNonAuthScreenTabs(state: TabNavigationState<ParamListBase>) {
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

  const tabs: TabsConfig<BubbleTabBarItemConfig> = {};
  nonAuthBottomTabScreens.map((screen, index) => {
    let icon: any;
    switch (screen.name) {
      case HOME_SCREEN:
        icon = () => (state.index === index ? <HomeFill /> : <Home />);
        break;
      case CATEGORIES_SCREEN:
        icon = () => (state.index === index ? <ProductFill /> : <Product />);
        break;
      case HELP_SCREEN:
        icon = () => (state.index === index ? <HelpFill /> : <Help />);
        break;
    }
    tabs[screen.name] = {
      ...defaultTabs,
      icon: {
        ...defaultIconStyles,
        component: icon,
      },
    };
  });

  return tabs;
}

function renderAuthScreenTabs(
  state: TabNavigationState<ParamListBase>,
  uri: string | undefined,
) {
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

  const tabs: TabsConfig<BubbleTabBarItemConfig> = {};
  authBottomTabScreens.map((screen, index) => {
    let icon: any;
    switch (screen.name) {
      case HOME_SCREEN:
        icon = () => (state.index === index ? <HomeFill /> : <Home />);
        break;
      case CATEGORIES_SCREEN:
        icon = () => (state.index === index ? <ProductFill /> : <Product />);
        break;
      case PROFILE_SCREEN:
        icon = () => <ProfileIcon uri={uri} />;
        break;
    }
    tabs[screen.name] = {
      ...defaultTabs,
      icon: {
        ...defaultIconStyles,
        component: icon,
      },
    };
  });

  return tabs;
}

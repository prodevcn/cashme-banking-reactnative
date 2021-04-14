import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnimatedTabBar, {
  TabsConfig,
  BubbleTabBarItemConfig,
} from "@gorhom/animated-tabbar";
import { commonScreens } from "./routes";
import GlobalCreditIcon from "../assets/images/globalcredit-icon.svg";

const tabs: TabsConfig<BubbleTabBarItemConfig> = {
  HOME_SCREEN: {
    labelStyle: {
      color: "#1B8CF4",
    },
    icon: {
      component: () => <GlobalCreditIcon />,
      activeColor: "rgba(91,55,183,1)",
      inactiveColor: "rgba(0,0,0,1)",
    },
    background: {
      activeColor: "#EBF6FF",
      inactiveColor: "rgba(223,215,243,0)",
    },
  },
  PRODUCTS_SCREEN: {
    labelStyle: {
      color: "#1B8CF4",
    },
    icon: {
      component: () => <GlobalCreditIcon />,
      activeColor: "rgba(91,55,183,1)",
      inactiveColor: "rgba(0,0,0,1)",
    },
    background: {
      activeColor: "#EBF6FF",
      inactiveColor: "rgba(223,215,243,0)",
    },
  },
  HELP_SCREEN: {
    labelStyle: {
      color: "#1B8CF4",
    },
    icon: {
      component: () => <GlobalCreditIcon />,
      activeColor: "rgba(91,55,183,1)",
      inactiveColor: "rgba(0,0,0,1)",
    },
    background: {
      activeColor: "#EBF6FF",
      inactiveColor: "rgba(223,215,243,0)",
    },
  },
  TERMS_SCREEN: {
    labelStyle: {
      color: "#1B8CF4",
    },
    icon: {
      component: () => <GlobalCreditIcon />,
      activeColor: "rgba(91,55,183,1)",
      inactiveColor: "rgba(0,0,0,1)",
    },
    background: {
      activeColor: "#EBF6FF",
      inactiveColor: "rgba(223,215,243,0)",
    },
  },
};

const BottomTab = createBottomTabNavigator();

export function NonAuthenticatedScreens() {
  return (
    <BottomTab.Navigator
      tabBar={props => <AnimatedTabBar tabs={tabs} {...props} />}
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

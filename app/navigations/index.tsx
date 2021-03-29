import React, { Component, ComponentType } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { commonScreens, authScreens } from "./routes";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

class RootNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={"Main"}
          children={() => nonAuthenticatedScreens()}
          options={{ headerShown: false }}
        />
        {authScreens.map(screen => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    );
  }
}

function nonAuthenticatedScreens() {
  return (
    <BottomTab.Navigator>
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

export default RootNavigation;

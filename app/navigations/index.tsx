import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { commonScreens } from "./routes";

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

class RootNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}

function BottomNavigation() {
  return (
    <BottomTabs.Navigator>
      {commonScreens.map(screen => (
        <BottomTabs.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </BottomTabs.Navigator>
  );
}

export default RootNavigation;

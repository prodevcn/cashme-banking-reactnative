import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NonAuthenticatedScreens } from "./bottomTab";
import { noConnectionScreen } from "./routes";

const Stack = createStackNavigator();

class RootNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={NonAuthenticatedScreens}
          options={{ headerShown: false }}
        />

        {/* If there is no internet connection */}
        <Stack.Screen
          name={noConnectionScreen.name}
          component={noConnectionScreen.component}
          options={noConnectionScreen.options}
        />
      </Stack.Navigator>
    );
  }
}

export const navigationRef = React.createRef<any>();

export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name, params);
}

export default RootNavigation;

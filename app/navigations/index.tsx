import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NonAuthenticatedScreens } from "./bottomTab";
import { noConnectionScreen, authScreens } from "./routes";

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
        {authScreens.map((authScreen, index) => (
          <Stack.Screen
            key={index}
            name={authScreen.name}
            component={authScreen.component}
            options={authScreen.options}
          />
        ))}

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

export default RootNavigation;

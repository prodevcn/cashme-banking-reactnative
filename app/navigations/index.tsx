import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NonAuthenticatedScreens } from "./bottomTab";
import {
  noConnectionScreen,
  authScreens,
  resetPinScreen,
  securitySettingsScreen,
  productScreens,
  getLoan,
  personalInfoScreen,
} from "./routes";

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
            key={`${authScreen.name}_${index}`}
            name={authScreen.name}
            component={authScreen.component}
            options={authScreen.options}
          />
        ))}

        {productScreens.map((screen, index) => (
          <Stack.Screen
            key={`${screen.name}_${index}`}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}

        <Stack.Screen
          name={getLoan.name}
          component={getLoan.component}
          options={getLoan.options}
        />

        <Stack.Screen
          name={noConnectionScreen.name}
          component={noConnectionScreen.component}
          options={noConnectionScreen.options}
        />

        <Stack.Screen
          name={resetPinScreen.name}
          component={resetPinScreen.component}
          options={resetPinScreen.options}
        />

        <Stack.Screen
          name={securitySettingsScreen.name}
          component={securitySettingsScreen.component}
          options={securitySettingsScreen.options}
        />

        <Stack.Screen
          name={personalInfoScreen.name}
          component={personalInfoScreen.component}
          options={personalInfoScreen.options}
        />
      </Stack.Navigator>
    );
  }
}

export default RootNavigation;

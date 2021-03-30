import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nonAuthenticatedStackScreens } from "./routes";

const Stack = createStackNavigator();

class RootNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        {nonAuthenticatedStackScreens.map(screen => (
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

export default RootNavigation;

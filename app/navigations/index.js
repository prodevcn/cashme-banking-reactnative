import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HOME_SCREEN } from "./screen-name-constants";
import MainScreen from "../screens";

const Stack = createStackNavigator();

export default class RootNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
      <Stack.Navigator>
        <Stack.Screen name={HOME_SCREEN} component={MainScreen}/>
      </Stack.Navigator>
    );
  }
}
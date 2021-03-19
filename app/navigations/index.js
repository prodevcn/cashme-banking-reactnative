import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HOME_SCREEN } from "./screen-name-constants";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default class RootNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Stack.Navigator>
        <Stack.Screen name={HOME_SCREEN} component={Home}/>
      </Stack.Navigator>
    );
  }
}
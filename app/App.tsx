import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Loader from "./components/Loader";
import RootNavigation from "./navigations";

interface AppProps {}

interface AppState {
  isReady: boolean;
}

export default class App extends Component<AppProps, AppState> {
  constructor(props: object) {
    super(props);

    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Loader />;
    }

    return (
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    );
  }
}

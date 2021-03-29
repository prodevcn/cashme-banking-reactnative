import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { View, Text } from "react-native";
import styles from "./styles";
import { NavigationInjectedProps, NavigationRoute } from "react-navigation";

interface SplashProps extends WithTranslation, NavigationInjectedProps {
  isLoading: boolean;
  route: NavigationRoute;
}

class Splash extends Component<SplashProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    );
  }
}

export default withTranslation()(Splash);

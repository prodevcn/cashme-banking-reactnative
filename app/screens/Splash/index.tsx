import React, { Component, ComponentType } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { compose } from "redux";
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
        <Text>Home</Text>
      </View>
    );
  }
}

export default compose<ComponentType>(withTranslation("translations"))(Splash);

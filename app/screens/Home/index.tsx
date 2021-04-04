import React, { Component, ComponentType } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { compose } from "redux";
import { View, Text } from "react-native";
import { NavigationInjectedProps, NavigationRoute } from "react-navigation";

import styles from "./styles";

interface HomeProps extends WithTranslation, NavigationInjectedProps {
  route: NavigationRoute;
}

class Home extends Component<HomeProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

export default compose<ComponentType>(withTranslation())(Home);

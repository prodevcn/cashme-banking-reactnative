import React, { Component, ComponentType } from "react";
import { compose } from "redux";
import { WithTranslation, withTranslation } from "react-i18next";
import { View, Text } from "react-native";
import { NavigationInjectedProps, NavigationRoute } from "react-navigation";

import styles from "./styles";

interface TermsProps extends WithTranslation, NavigationInjectedProps {
  route: NavigationRoute;
}

class Terms extends Component<TermsProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Terms</Text>
      </View>
    );
  }
}

export default compose<ComponentType>(withTranslation())(Terms);
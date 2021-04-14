import React, { Component, ComponentType } from "react";
import { compose } from "redux";
import { WithTranslation, withTranslation } from "react-i18next";
import { View, Text } from "native-base";
import { NavigationInjectedProps, NavigationRoute } from "react-navigation";
import withLoginSheet from "../../hocs/withLoginSheet";

import styles from "./styles";

interface HelpProps extends WithTranslation, NavigationInjectedProps {
  route: NavigationRoute;
}

class Help extends Component<HelpProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Help</Text>
      </View>
    );
  }
}

export default compose<ComponentType>(withTranslation(), withLoginSheet)(Help);

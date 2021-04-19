import React, { Component, ComponentType } from "react";
import { compose } from "redux";
import { WithTranslation, withTranslation } from "react-i18next";
import styles from "./styles";
import ConnectionIcon from "../../assets/images/connection-icon.svg";
import { View, Button, Text } from "native-base";
import { NavigationInjectedProps, NavigationRoute } from "react-navigation";

interface NoConnectionProps extends WithTranslation, NavigationInjectedProps {
  route: NavigationRoute;
}

class NoConnection extends Component<NoConnectionProps> {
  render() {
    const { t } = this.props;

    return (
      <View style={styles.container}>
        <ConnectionIcon />
        <Text style={styles.text}>{t("no_connection.check_connection")}</Text>
        <Button bordered rounded style={styles.btnStyle}>
          <Text>{t("no_connection.retry")}</Text>
        </Button>
      </View>
    );
  }
}

export default compose<ComponentType>(withTranslation())(NoConnection);

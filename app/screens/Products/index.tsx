import React, { Component, ComponentType } from "react";
import { compose } from "redux";
import { WithTranslation, withTranslation } from "react-i18next";
import { View, Text } from "react-native";
import { NavigationInjectedProps, NavigationRoute } from "react-navigation";

import styles from "./styles";

interface ProductsProps extends WithTranslation, NavigationInjectedProps {
  route: NavigationRoute;
}

class Products extends Component<ProductsProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Products</Text>
      </View>
    );
  }
}

export default compose<ComponentType>(withTranslation())(Products);
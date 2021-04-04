import React, { Component, ComponentType } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { WithTranslation, withTranslation } from "react-i18next";
import { View, Text } from "react-native";
import styles from "./styles";
import { RootState, AppDispatch } from "../../store";
import { NavigationInjectedProps, NavigationRoute } from "react-navigation";

interface ProductsProps {
  isLoading: boolean;
  route: NavigationRoute;
}

class Products extends Component<
  ProductsProps & WithTranslation & NavigationInjectedProps
> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Products</Text>
      </View>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    isLoading: state.common.isLoading,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {};
};
export default compose<ComponentType>(
  withTranslation("translations"),
  connect(mapStateToProps, mapDispatchToProps),
)(Products);

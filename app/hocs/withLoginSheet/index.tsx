import React, { ComponentType } from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";
import LoginDrawer from "../../components/LoginDrawer";

const withLoginSheet = (Component: ComponentType) => () => {
  return (
    <View style={styles.container}>
      <Component />
      <LoginDrawer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withLoginSheet;

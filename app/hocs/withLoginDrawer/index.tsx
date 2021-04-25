import React, { ComponentType } from "react";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import { View } from "native-base";

import LoginDrawer from "../../components/LoginDrawer";
import { RootState } from "../../store";

const withLoginDrawer = (Component: ComponentType) => () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <View style={styles.container}>
      <Component />
      {!token && <LoginDrawer />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withLoginDrawer;

import React, { ComponentType, useRef, useCallback } from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";
import { useFocusEffect } from "@react-navigation/native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import LoginDrawer from "../../components/LoginDrawer";

const withLoginDrawer = (Component: ComponentType) => () => {
  const ref = useRef<BottomSheetModal>(null);

  // Collapse the drawer on each navigation to screen
  useFocusEffect(
    useCallback(() => {
      ref.current?.snapTo(0);
    }, []),
  );

  return (
    <View style={styles.container}>
      <Component />
      <LoginDrawer ref={ref} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withLoginDrawer;

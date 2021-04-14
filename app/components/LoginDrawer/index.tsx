import React, { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import { View, Text } from "react-native";
import { Button } from "native-base";
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import withModalProvider from "../../hocs/withModalProvider";

import styles from "./styles";

const LoginDrawer = () => {
  const drawerRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["15%", "75%"], []);

  useLayoutEffect(() => {
    drawerRef.current?.present();
  }, []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        enableTouchThrough={false}
        pressBehavior="collapse"
        appearsOnIndex={1}
        disappearsOnIndex={0}
      />
    ),
    [],
  );

  const ModalBackground = () => (
    <View style={styles.backgroundContainer}></View>
  );

  return (
    <View>
      <BottomSheetModal
        ref={drawerRef}
        key="LoginDrawer"
        name="LoginDrawer"
        index={0}
        snapPoints={snapPoints}
        dismissOnPanDown={false}
        handleComponent={null}
        backdropComponent={renderBackdrop}
        backgroundComponent={ModalBackground}
        enableContentPanningGesture={false}
        enableHandlePanningGesture={false}
      >
        <View>
          <Button
            full
            rounded
            style={styles.button}
            onPress={() => {
              drawerRef.current?.expand();
            }}
          >
            <Text>Login</Text>
          </Button>
        </View>
      </BottomSheetModal>
    </View>
  );
};

export default withModalProvider(LoginDrawer);

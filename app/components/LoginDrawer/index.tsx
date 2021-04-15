import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { View, Text, Button } from "native-base";
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import withModalProvider from "../../hocs/withModalProvider";

import styles from "./styles";
import LoginForm from "../LoginForm";

const LoginDrawer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
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
        onAnimate={(fromIndex, toIndex) => setIsExpanded(toIndex === 1)}
      >
        {!isExpanded ? (
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
        ) : (
          <LoginForm />
        )}
      </BottomSheetModal>
    </View>
  );
};

export default withModalProvider(LoginDrawer);

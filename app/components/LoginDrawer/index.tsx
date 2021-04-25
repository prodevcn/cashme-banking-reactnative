import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import { useTranslation } from "react-i18next";
import { View, Text } from "native-base";
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import LoginForm from "../LoginForm";
import DrawerButton from "./DrawerButton";

import styles from "./styles";

const LoginDrawer = () => {
  const ref = useRef<BottomSheetModal>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const snapPoints = useMemo(() => [120, 310], []);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    ref.current?.present();
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
    <BottomSheetModalProvider>
      <View>
        <BottomSheetModal
          ref={ref}
          key="LoginDrawer"
          name="LoginDrawer"
          index={isExpanded ? 1 : 0}
          snapPoints={snapPoints}
          dismissOnPanDown={false}
          handleComponent={null}
          backdropComponent={renderBackdrop}
          backgroundComponent={ModalBackground}
          enableContentPanningGesture={false}
          enableHandlePanningGesture={false}
          onAnimate={(fromIndex, toIndex) => setIsExpanded(toIndex === 1)}
          animationDuration={500}
        >
          {!isExpanded ? (
            <View>
              <DrawerButton
                full
                rounded
                style={styles.button}
                onPress={() => {
                  ref?.current?.expand();
                }}
              >
                <Text>{t("login.login")}</Text>
              </DrawerButton>
              <Text style={styles.accountText}>
                {t("login.dont_have_account")}{" "}
                <Text style={styles.signUpLink} onPress={() => {}}>
                  {t("login.sign_up")}
                </Text>
              </Text>
            </View>
          ) : (
            <LoginForm />
          )}
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default LoginDrawer;

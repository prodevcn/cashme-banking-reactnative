import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  forwardRef,
  useState,
} from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { View, Text } from "native-base";
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import styles from "./styles";

import LoginForm from "../LoginForm";
import DrawerButton from "./DrawerButton";

type LoginDrawerProps = {};

const LoginDrawer = forwardRef(
  (
    props: LoginDrawerProps & WithTranslation,
    ref: React.Ref<BottomSheetModal>,
  ) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const snapPoints = useMemo(() => ["20%", "70%"], []);

    useLayoutEffect(() => {
      ref?.current?.present();
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

    const { t } = props;

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
            animationDuration={0.1}
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
                  {t("login.dontHaveAccount")}{" "}
                  <Text style={styles.signUpLink} onPress={() => {}}>
                    {t("login.signUp")}
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
  },
);

export default withTranslation("translations", { withRef: true })(LoginDrawer);

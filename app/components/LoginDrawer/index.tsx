import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { View, Text } from "native-base";
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { BlurView } from "@react-native-community/blur";

import LoginForm from "../LoginForm";
import DrawerButton from "./DrawerButton";
import { verifySignature } from "../../redux/authSlice";
import { hasPrivateKey, signMessage } from "../../helpers/auth";

import styles from "./styles";

const LoginDrawer = () => {
  const ref = useRef<BottomSheetModal>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const snapPoints = useMemo(() => [120, 320], []);
  const { t } = useTranslation();
  const dispatch = useDispatch();

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

  const onLogin = async () => {
    ref?.current?.expand();

    const isBiometricsEnabled = await hasPrivateKey();

    if (!isBiometricsEnabled) {
      return;
    }

    const { signature, message } = await signMessage(t("login.login"));

    // TODO: get username from storage
    dispatch(verifySignature("mobile-user@mail.com", signature, message));
  };

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
          <View style={styles.blurArea}>
            <BlurView
              style={styles.blured}
              blurType="light"
              blurAmount={5}
              reducedTransparencyFallbackColor="white"
            />
            {!isExpanded ? (
              <View>
                <DrawerButton
                  full
                  rounded
                  style={styles.button}
                  onPress={onLogin}
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
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default LoginDrawer;

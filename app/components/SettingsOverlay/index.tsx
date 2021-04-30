import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Modal from "react-native-modal";
import { Button, Text, View } from "native-base";
import Logo from "../Logo";
import MenuButton from "../MenuButton";
import { enrollPublicKey } from "../../redux/authSlice";
import * as auth from "../../helpers/auth";
import { RootState } from "../../store";
import * as GlobalNavigation from "../../navigations/GlobalNavigation";
import { RESET_PIN } from "../../constants";

import PinIcon from "../../assets/images/pin.svg";
import FingerprintIcon from "../../assets/images/finger-print.svg";

import styles from "./styles";

const SettingsOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasSensor, setHasSensor] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true);
  const [isLocalAuthEnabled, setIsLocalAuthEnabled] = useState(false);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { token, profile: { email } = {} } = useSelector(
    (state: RootState) => ({
      token: state.auth.token,
      profile: state.profile.data,
    }),
  );

  useEffect(() => {
    async function init() {
      const dismissed = await auth.isBiometricsDismissed();
      const sensor = await auth.hasSensor();
      const localAuthEnabled = await auth.isLocalAuthEnabled();

      setIsDismissed(dismissed);
      setHasSensor(sensor);
      setIsLocalAuthEnabled(localAuthEnabled);
    }
    init();
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    }

    setIsVisible(!isDismissed && !isLocalAuthEnabled);
  }, [token]);

  const skip = () => {
    setIsVisible(false);
  };

  const hideOverlay = async () => {
    auth.dismissBiometrics();
    skip();
  };

  const enableBiometrics = async () => {
    const success = auth.promptBiometrics(t("login.login"));

    if (!success) {
      return;
    }

    const publicKey = await auth.enableBiometrics();

    await dispatch(enrollPublicKey(email, publicKey));

    skip();
  };

  const enablePin = async () => {
    GlobalNavigation.navigate(RESET_PIN);
    skip();
  };

  return (
    <>
      <Modal
        isVisible={isVisible}
        customBackdrop={<View style={styles.modal} />}
        backdropOpacity={0.9}
      >
        <View style={styles.container}>
          <Logo style={styles.logo} />
          <View style={styles.title}>
            <Text style={styles.titleText}>{t("settings_overlay.title")}</Text>
          </View>
          <View style={styles.buttonSection}>
            <MenuButton
              title={t("settings_overlay.pin_code")}
              description={t("settings_overlay.create_pin_code")}
              Icon={PinIcon}
              onPress={enablePin}
            />
            {hasSensor && (
              <MenuButton
                title={t("settings_overlay.biometrics")}
                description={t("settings_overlay.enable_biometrics")}
                Icon={FingerprintIcon}
                onPress={enableBiometrics}
              />
            )}
          </View>

          <Button
            full
            transparent
            large
            onPress={skip}
            style={styles.actionButton}
          >
            <Text style={styles.skipText}>{t("settings_overlay.skip")}</Text>
          </Button>
          <Button
            full
            transparent
            small
            onPress={hideOverlay}
            style={styles.actionButton}
          >
            <Text style={styles.dismissText}>
              {t("settings_overlay.dont_show_again")}
            </Text>
          </Button>
        </View>
      </Modal>
    </>
  );
};

export default SettingsOverlay;

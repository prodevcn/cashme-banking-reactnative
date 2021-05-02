import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Modal from "react-native-modal";
import { Button, Text, View } from "native-base";
import Logo from "../Logo";
import MenuButton from "../MenuButton";
import { enrollPublicKey } from "../../redux/authSlice";
import * as auth from "../../helpers/auth";
import * as platform from "../../helpers/platform";
import { RootState } from "../../store";
import * as GlobalNavigation from "../../navigations/GlobalNavigation";
import { RESET_PIN } from "../../constants";

import PinIcon from "../../assets/images/pin.svg";
import FingerprintIcon from "../../assets/images/finger-print.svg";

import customColor from "../../theme/customColor";
import styles from "./styles";

const SettingsOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasHardware, sethasHardware] = useState(false);
  const [isDeviceAuthEnabled, setIsDeviceAuthEnabled] = useState(false);
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
      const hardware = await auth.hasHardware();
      const deviceAuthEnabled = await auth.isDeviceAuthEnabled();
      const localAuthEnabled = await auth.isLocalAuthEnabled();

      setIsDismissed(dismissed);
      sethasHardware(hardware);
      setIsDeviceAuthEnabled(deviceAuthEnabled);
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
    if (!isDeviceAuthEnabled) {
      return platform.openMobileSettings();
    }

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

  const menuButtonStyleOverrides = {
    styleBorder: customColor.brandLight,
    styleArrowColor: customColor.brandLight,
    styleTitleColor: customColor.brandLight,
    styleDescriptionColor: customColor.brandLight,
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
              Icon={() => <PinIcon fill="#fff" stroke="#fff" />}
              onPress={enablePin}
              {...menuButtonStyleOverrides}
            />
            {hasHardware && (
              <MenuButton
                title={t("settings_overlay.biometrics")}
                description={t("settings_overlay.enable_biometrics")}
                Icon={() => <FingerprintIcon fill="#fff" stroke="#fff" />}
                onPress={enableBiometrics}
                {...menuButtonStyleOverrides}
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

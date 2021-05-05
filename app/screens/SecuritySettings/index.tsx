import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "native-base";
import Screen from "../../components/Screen";
import MenuButton from "../../components/MenuButton";
import { RootState } from "../../store";
import * as auth from "../../helpers/auth";
import * as platform from "../../helpers/platform";
import { enrollPublicKey } from "../../redux/authSlice";
import { RESET_PIN } from "../../constants";

import PinIcon from "../../assets/images/pin.svg";
import FingerprintIcon from "../../assets/images/finger-print.svg";

import styles from "./styles";
import customColor from "../../theme/customColor";

const SecuritySettings = () => {
  const [hasHardware, sethasHardware] = useState(false);
  const [isDeviceAuthEnabled, setIsDeviceAuthEnabled] = useState(false);

  const { t } = useTranslation();
  const { loading, profile: { email } = {} } = useSelector(
    (state: RootState) => ({
      loading: state.auth.loading,
      profile: state.profile.data,
    }),
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    async function init() {
      const hardware = await auth.hasHardware();
      const deviceAuthEnabled = await auth.isDeviceAuthEnabled();

      sethasHardware(hardware);
      setIsDeviceAuthEnabled(deviceAuthEnabled);
    }
    init();
  }, []);

  const enablePin = async () => {
    navigation.navigate(RESET_PIN);
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
  };

  return (
    <Screen
      title={t("security_settings.title")}
      isLoading={loading}
      hasHeader={true}
    >
      <View style={styles.container}>
        <View style={styles.caption}>
          <Text>{t("security_settings.caption")}</Text>
        </View>
        <View>
          <MenuButton
            title={t("settings_overlay.pin_code")}
            description={t("settings_overlay.create_pin_code")}
            Icon={() => (
              <PinIcon fill={customColor.black} stroke={customColor.black} />
            )}
            onPress={enablePin}
          />
          {hasHardware && (
            <MenuButton
              title={t("settings_overlay.biometrics")}
              description={t("settings_overlay.enable_biometrics")}
              Icon={() => <FingerprintIcon fill={customColor.black} />}
              onPress={enableBiometrics}
            />
          )}
        </View>
      </View>
    </Screen>
  );
};

export default SecuritySettings;

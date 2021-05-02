import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "native-base";
import Screen from "../../components/Screen";
import MenuButton from "../../components/MenuButton";
import { RootState } from "../../store";
import * as auth from "../../helpers/auth";
import { enrollPublicKey } from "../../redux/authSlice";
import { RESET_PIN } from "../../constants";

import PinIcon from "../../assets/images/pin.svg";
import FingerprintIcon from "../../assets/images/finger-print.svg";

import styles from "./styles";

const SecuritySettings = () => {
  const { t } = useTranslation();
  const { loading, profile: { email } = {} } = useSelector(
    (state: RootState) => ({
      loading: state.auth.loading,
      profile: state.profile.data,
    }),
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const enablePin = async () => {
    navigation.navigate(RESET_PIN);
  };

  const enableBiometrics = async () => {
    const success = auth.promptBiometrics(t("login.login"));

    if (!success) {
      return;
    }

    const publicKey = await auth.enableBiometrics();

    await dispatch(enrollPublicKey(email, publicKey));
  };

  return (
    <Screen title={t("security_settings.title")} isLoading={loading}>
      <View style={styles.container}>
        <View style={styles.caption}>
          <Text>{t("security_settings.caption")}</Text>
        </View>
        <View>
          <MenuButton
            title={t("settings_overlay.pin_code")}
            description={t("settings_overlay.create_pin_code")}
            Icon={() => <PinIcon fill="#000" stroke="#000" />}
            onPress={enablePin}
          />
          <MenuButton
            title={t("settings_overlay.biometrics")}
            description={t("settings_overlay.enable_biometrics")}
            Icon={() => <FingerprintIcon fill="#000" />}
            onPress={enableBiometrics}
          />
        </View>
      </View>
    </Screen>
  );
};

export default SecuritySettings;

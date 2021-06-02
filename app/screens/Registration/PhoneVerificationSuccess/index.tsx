import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

import PhoneSuccessIcon from "../../../assets/images/phone-success.svg";
import Screen from "../../../components/Screen";
import { FACE_VERIFICATION_SETUP } from "../../../constants";

import styles from "./styles";

const PhoneVerificationSuccess = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  return (
    <Screen
      title={t("phone_verification.verified_title")}
      titleStyle={styles.title}
    >
      <View style={styles.container}>
        <PhoneSuccessIcon style={styles.icon} />
        <Text style={styles.text}>{t("phone_verification.success")}</Text>

        <Button
          full
          primary
          rounded
          style={styles.button}
          onPress={() => navigate(FACE_VERIFICATION_SETUP)}
        >
          <Text>{t("phone_verification.continue")}</Text>
        </Button>
      </View>
    </Screen>
  );
};

export default PhoneVerificationSuccess;

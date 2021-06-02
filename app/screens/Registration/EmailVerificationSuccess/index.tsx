import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

import EmailSuccessIcon from "../../../assets/images/email-success.svg";
import Screen from "../../../components/Screen";
import { PHONE_VERIFICATION } from "../../../constants";

import styles from "./styles";

const EmailVerificationSuccess = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  return (
    <Screen title={t("email_verification.title")} titleStyle={styles.title}>
      <View style={styles.container}>
        <EmailSuccessIcon style={styles.icon} />
        <Text style={styles.text}>{t("email_verification.success")}</Text>

        <Button
          full
          primary
          rounded
          style={styles.button}
          onPress={() => navigate(PHONE_VERIFICATION)}
        >
          <Text>{t("email_verification.continue")}</Text>
        </Button>
      </View>
    </Screen>
  );
};

export default EmailVerificationSuccess;

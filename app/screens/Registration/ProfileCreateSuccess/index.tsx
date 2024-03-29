import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

import Screen from "../../../components/Screen";
import { HOME_SCREEN } from "../../../constants";

import ProfileSuccess from "../../../assets/images/profile-success.svg";
import Checkmark from "../../../assets/images/check-mark.svg";

import styles from "./styles";

const ProfileCreateSuccess = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  return (
    <Screen title={t("profile_created.title")} titleStyle={styles.title}>
      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <ProfileSuccess style={styles.profileIcon} />
          <Checkmark style={styles.checkmarkIcon} />
        </View>
        <Text style={styles.text}>{t("profile_created.success")}</Text>

        <Button
          full
          bordered
          rounded
          style={styles.button}
          onPress={() => navigate(HOME_SCREEN)}
        >
          <Text>{t("profile_created.home")}</Text>
        </Button>
      </View>
    </Screen>
  );
};

export default ProfileCreateSuccess;

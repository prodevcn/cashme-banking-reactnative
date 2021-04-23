import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles";
import ConnectionIcon from "../../assets/images/connection-icon.svg";
import { View, Button, Text } from "native-base";

const NoConnection = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ConnectionIcon />
      <Text style={styles.text}>{t("no_connection.check_connection")}</Text>
      <Button bordered rounded style={styles.btnStyle}>
        <Text>{t("no_connection.retry")}</Text>
      </Button>
    </View>
  );
};

export default NoConnection;

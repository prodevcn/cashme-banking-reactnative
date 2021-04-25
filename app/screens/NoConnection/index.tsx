import React from "react";
import { useTranslation } from "react-i18next";
import { View, Button, Text } from "native-base";
import { CommonActions, useNavigation } from "@react-navigation/native";

import ConnectionIcon from "../../assets/images/connection-icon.svg";

import styles from "./styles";

const NoConnection = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const goBack = () => {
    navigation.dispatch(state => {
      const routes = [...state.routes.slice(0, -1)];
      const route = routes.pop();

      if (!route) {
        return CommonActions.reset(state);
      }

      const r = [...routes, { name: route.name, params: route.params }];

      return CommonActions.reset({
        ...state,
        routes: r,
        index: r.length - 1,
      });
    });
  };

  return (
    <View style={styles.container}>
      <ConnectionIcon />
      <Text style={styles.text}>{t("no_connection.check_connection")}</Text>
      <Button bordered rounded style={styles.btnStyle} onPress={() => goBack()}>
        <Text>{t("no_connection.retry")}</Text>
      </Button>
    </View>
  );
};

export default NoConnection;

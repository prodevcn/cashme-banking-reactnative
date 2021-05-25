import React from "react";
import { Text, View } from "native-base";
import { useTranslation } from "react-i18next";

import styles from "./styles";

const CardTransfer = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>Transfer screen</Text>
    </View>
  );
};

export default CardTransfer;

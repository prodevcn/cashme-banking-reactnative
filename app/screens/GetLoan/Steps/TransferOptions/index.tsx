import React, { useState } from "react";
import { Text, View } from "native-base";
import { useTranslation } from "react-i18next";
import SwitchSelector, {
  ISwitchSelectorOption,
} from "react-native-switch-selector";

import CardTransfer from "./CardTransfer";
import Cash from "./Cash";
import { TRANSFER_OPTIONS } from "../../../../constants";

import customColor from "../../../../theme/customColor";
import styles from "./styles";

const TransferOptions = () => {
  const { t } = useTranslation();
  const [method, setMethod] = useState(TRANSFER_OPTIONS.CASH);
  const options: ISwitchSelectorOption[] = [
    {
      label: t("credit_steps.transfer_options.cash"),
      value: TRANSFER_OPTIONS.CASH,
    },
    {
      label: t("credit_steps.transfer_options.transfer"),
      value: TRANSFER_OPTIONS.CARD_TRANSFER,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t("credit_steps.transfer_options.preferred_loan_option")}
      </Text>

      <SwitchSelector
        initial={0}
        onPress={value => {
          setMethod(value.toString());
        }}
        textColor={customColor.brandDark}
        selectedColor={customColor.white}
        buttonColor={customColor.dodgerBlue}
        borderColor={customColor.gray}
        hasPadding
        valuePadding={3}
        options={options}
        testID="gender-switch-selector"
        accessibilityLabel="gender-switch-selector"
        style={styles.switchSelector}
      />

      {method === TRANSFER_OPTIONS.CASH ? <Cash /> : <CardTransfer />}
    </View>
  );
};

export default TransferOptions;

import React from "react";
import { ViewStyle } from "react-native";
import { View, Input, Item, Label } from "native-base";

import ArmenianFlag from "../../assets/images/rounded-armenian-flag.svg";

import styles from "./styles";

interface PhoneInputProps {
  style?: ViewStyle;
}

const INPUT_MAX_LENGTH = 8;
const PREFIX = "+374";

const PhoneInput = ({ style }: PhoneInputProps) => {
  return (
    <View style={style}>
      <Item fixedLabel style={{ marginLeft: 0 }}>
        <ArmenianFlag style={styles.flag} />
        <Label style={styles.label}>{PREFIX}</Label>
        <Input
          style={{ flex: 5 }}
          keyboardType="numeric"
          maxLength={INPUT_MAX_LENGTH}
        />
      </Item>
    </View>
  );
};

export default PhoneInput;

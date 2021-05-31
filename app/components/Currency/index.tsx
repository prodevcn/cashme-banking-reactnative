import React from "react";
import { TextStyle } from "react-native";
import { Text } from "native-base";

import { numberToDecimalString } from "../../helpers/calculation";

interface ICurrencyProps {
  amount: number | string;
  style?: TextStyle;
}

const Currency = ({ amount, style }: ICurrencyProps) => {
  return <Text style={style}>{`֏ ${numberToDecimalString(amount)}`}</Text>;
};

export default Currency;

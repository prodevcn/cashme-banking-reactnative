import React from "react";
import { TextStyle } from "react-native";
import { Text } from "native-base";

import { numberToDecimalString } from "../../helpers/formatter";

interface ICurrencyProps {
  amount: number;
  precision?: number;
  style?: TextStyle;
}

const Currency = ({ amount, precision = 2, style }: ICurrencyProps) => {
  return (
    <Text style={style}>{`֏ ${numberToDecimalString(amount, precision)}`}</Text>
  );
};

export default Currency;

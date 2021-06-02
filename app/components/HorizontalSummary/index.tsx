import React from "react";
import { View, Text } from "native-base";
import { ViewStyle, TextStyle } from "react-native";

import styles from "./styles";

interface HorizontalSummaryProps {
  items?: string[];
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const HorizontalSummary = ({
  items = [],
  style,
  textStyle,
}: HorizontalSummaryProps) => {
  const hasSeparator = (i: number) => {
    return i < items.length - 1;
  };

  return (
    <View style={[style, styles.summary]}>
      {items.map((it, i) => {
        return (
          <View
            key={i}
            style={[styles.item, hasSeparator(i) && styles.rightBorder]}
          >
            <Text style={[styles.text, textStyle]}>{it}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default HorizontalSummary;

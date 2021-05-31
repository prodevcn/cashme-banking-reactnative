import React from "react";
import { View, Text } from "native-base";

import styles from "./styles";
import { ViewStyle } from "react-native";

interface HorizontalSummaryProps {
  items?: string[];
  style?: ViewStyle;
}

const HorizontalSummary = ({ items = [], style }: HorizontalSummaryProps) => {
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
            <Text style={styles.text}>{it}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default HorizontalSummary;

import React from "react";
import {
  ImageStyle,
  TextStyle,
  ViewStyle,
  TouchableHighlight,
} from "react-native";
import { Text, View } from "native-base";

import styles from "./styles";

interface ICategoryItemProps {
  style?: ViewStyle;
  textStyle?: TextStyle;
  backgroundStyle?: ImageStyle;
  onPress?(): CallableFunction;
  title: string;
  Icon: any;
  Background: any;
}

const CategoryItem = ({
  textStyle,
  title,
  Icon,
  Background,
  backgroundStyle,
  ...rest
}: ICategoryItemProps) => {
  return (
    <TouchableHighlight {...rest}>
      <View>
        <View style={styles.container}>
          <View style={backgroundStyle}>
            <Background />
          </View>
          <View style={styles.icon}>
            <Icon />
          </View>
        </View>
        <View>
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default CategoryItem;

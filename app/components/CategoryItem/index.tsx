import React from "react";
import {
  ImageStyle,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "native-base";

import styles from "./styles";

interface ICategoryItemProps {
  style?: ViewStyle;
  textStyle?: TextStyle;
  backgroundStyle?: ImageStyle;
  onPress?(): void;
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
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <View>
        <View style={styles.container}>
          <View style={[styles.background, backgroundStyle]}>
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
    </TouchableOpacity>
  );
};

export default CategoryItem;

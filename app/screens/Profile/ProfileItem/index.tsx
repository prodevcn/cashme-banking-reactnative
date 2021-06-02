import React from "react";
import {
  ImageStyle,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { Icon, Text, View } from "native-base";

import styles from "./styles";

interface IProfileItemProps {
  style?: ViewStyle;
  textStyle?: TextStyle;
  title: string;
  PrefixIcon?: any;
  onPress?(): void;
}

const ProfileItem = ({
  textStyle,
  title,
  PrefixIcon,
  ...rest
}: IProfileItemProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <View style={styles.cardShadow}>
        <View style={styles.container}>
          {PrefixIcon && <View style={styles.prefix}>{PrefixIcon}</View>}
          <Text style={[styles.text, textStyle]}>{title}</Text>
          <Icon
            type="Entypo"
            name="chevron-small-right"
            style={styles.postfix}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileItem;

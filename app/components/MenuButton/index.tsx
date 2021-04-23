import React from "react";
import { ViewStyle } from "react-native";
import { Button, View, Text } from "native-base";

import ArrowIcon from "../../assets/images/arrow-right.svg";

import styles from "./styles";

interface MenuButtonProps {
  style?: ViewStyle;
  Icon: any;
  title: string;
  description?: string;
}

const MenuButton = ({ Icon, title, description, ...rest }: MenuButtonProps) => {
  return (
    <Button full bordered {...rest} style={styles.button}>
      <View style={styles.buttonLeftIcon}>
        <Icon />
      </View>
      <Text style={styles.buttonUpperText}>{title}</Text>
      {description && <Text style={styles.buttonLowerText}>{description}</Text>}
      <View style={styles.buttonRightIcon}>
        <ArrowIcon />
      </View>
    </Button>
  );
};

export default MenuButton;

import React from "react";
import { ViewStyle } from "react-native";
import { Button, View, Text } from "native-base";

import ArrowIcon from "../../assets/images/arrow-right.svg";

import styles from "./styles";

interface MenuButtonProps {
  style?: ViewStyle;
  color?: string;
  Icon: any;
  title: string;
  description?: string;
  onPress?(): void;
  styleBorder?: string;
  styleArrowColor?: string;
  styleTitleColor?: string;
  styleDescriptionColor?: string;
}

const MenuButton = ({
  Icon,
  title,
  description,
  styleBorder = "#e0ecfc",
  styleArrowColor = "#32506E",
  styleTitleColor = "#32506E",
  styleDescriptionColor = "#443C38",
  ...rest
}: MenuButtonProps) => {
  return (
    <Button
      full
      bordered
      {...rest}
      style={[styles.button, { borderColor: styleBorder }]}
    >
      <View style={[styles.buttonLeftIcon]}>
        <Icon />
      </View>
      <Text style={[styles.buttonUpperText, { color: styleTitleColor }]}>
        {title}
      </Text>
      {description && (
        <Text
          style={[styles.buttonLowerText, { color: styleDescriptionColor }]}
        >
          {description}
        </Text>
      )}
      <View style={styles.buttonRightIcon}>
        <ArrowIcon fill={styleArrowColor} />
      </View>
    </Button>
  );
};

export default MenuButton;

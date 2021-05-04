import React from "react";
import { ViewStyle } from "react-native";
import { View } from "native-base";

import Flower from "../../assets/images/flower.svg";
import FlowerRed from "../../assets/images/flower-red.svg";
import AppLogo from "../../assets/images/app-logo.svg";
import AppLogoDark from "../../assets/images/app-logo-dark.svg";

import styles from "./styles";

interface LogoProps {
  type?: "dark" | "light";
  style?: ViewStyle;
}

const Logo = ({ style, type = "light", ...rest }: LogoProps) => {
  return type === "light" ? (
    <View {...rest} style={[styles.icon, style]}>
      <Flower style={styles.flower} />
      <AppLogo />
    </View>
  ) : (
    <View {...rest} style={[styles.icon, style]}>
      <FlowerRed style={styles.flower} />
      <AppLogoDark />
    </View>
  );
};

export default Logo;

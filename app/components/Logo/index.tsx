import React from "react";
import { View } from "native-base";

import Flower from "../../assets/images/flower.svg";
import AppLogo from "../../assets/images/app-logo.svg";

import styles from "./styles";

interface LogoProps {
  style?: object;
}

const Logo = ({ style, ...rest }: LogoProps) => {
  return (
    <View {...rest} style={[styles.icon, style]}>
      <Flower style={styles.flower} />
      <AppLogo />
    </View>
  );
};

export default Logo;

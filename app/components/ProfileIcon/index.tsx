import React from "react";
import { ImageStyle } from "react-native";
import { Icon, Thumbnail } from "native-base";
import styles from "./styles";

interface ProfileIconProps {
  uri?: string;
  style?: ImageStyle;
}

const ProfileIcon = ({ uri, style }: ProfileIconProps) => {
  return uri ? (
    <Thumbnail source={{ uri: uri }} style={[styles.sizes, style]} />
  ) : (
    <Icon
      type="FontAwesome"
      name="user-o"
      style={[styles.sizes, styles.icon, style]}
    />
  );
};

export default ProfileIcon;

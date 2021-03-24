import React, { Component } from "react";
import { View, ActivityIndicator, ColorValue } from "react-native";
import styles from "./styles";

interface LoaderProps {
  isFullScreen?: boolean;
  size?: number | "small" | "large"; // number works just for Android
  color?: ColorValue;
}

export default class Loader extends Component<LoaderProps> {

  render() {
    const {
      isFullScreen = false,
      size = "large",
      color = "#0000ff",
    } = this.props;

    return (
      <View style={[styles.container, isFullScreen && styles.background]}>
        <ActivityIndicator size={size} color={color} />
      </View>
    );
  }
}

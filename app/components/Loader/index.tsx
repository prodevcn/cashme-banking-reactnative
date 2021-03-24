import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";
import { LoaderProps } from '../../interfaces';

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

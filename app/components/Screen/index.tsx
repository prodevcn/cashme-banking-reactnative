import React, { Component } from "react";
import { ScrollView, StatusBar, View, StatusBarAnimation, StatusBarStyle, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Loader from "../Loader";
import styles from "./styles";

interface ScreenProps {
  isNonScrolling?: boolean;
  statusBarHidden?: boolean;
  isLoading?: boolean;

  backgroundColor?: ViewStyle;
  innerStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  statusBarStyle?: StatusBarStyle;
  showHideTransitionStyle?: StatusBarAnimation;
}

export default class Screen extends Component<ScreenProps> {
  render() {
    const {
      isNonScrolling = true,
      statusBarHidden = false,
      isLoading = false,

      backgroundColor = { backgroundColor: "#fff"},
      innerStyle = null,
      contentContainerStyle = {},
      statusBarStyle = "light-content",
      showHideTransitionStyle = "fade",
    } = this.props;

    return (
      <SafeAreaView style={[styles.container, backgroundColor]}>
        <StatusBar
          animated={true}
          barStyle={statusBarStyle}
          showHideTransition={showHideTransitionStyle}
          hidden={statusBarHidden}
        />
        {[
          isNonScrolling ?
            <View
              key={"ScreenView"}
              style={[styles.container, innerStyle, backgroundColor]}
            >
              {this.props.children}
            </View>
            :
            <ScrollView
              key={"ScreenScrollView"}
              style={[styles.container, innerStyle, backgroundColor]}
              contentContainerStyle={contentContainerStyle}
            >
              {this.props.children}
            </ScrollView>,
          isLoading && <Loader key="Loader" isFullScreen={true} />
        ]}
      </SafeAreaView>
    );
  }
}
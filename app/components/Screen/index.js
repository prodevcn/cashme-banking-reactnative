import React, { Component } from "react";
import PropTypes from "prop-types";
import { KeyboardAvoidingView, Platform, ScrollView, StatusBar, View } from "react-native";

const isIos = Platform.OS === "ios"

export default class Screen extends Component {
  static propTypes = {
    isNonScrolling: PropTypes.bool,
    statusBarHidden: PropTypes.bool,

    outerStyle: PropTypes.object,
    innerStyle: PropTypes.object,
    contentContainerStyle: PropTypes.object,
    statusBarStyle: PropTypes.string, // ['default', 'dark-content', 'light-content']
    showHideTransitionStyle: PropTypes.string, // ['fade', 'slide', 'none']
  }

  render() {
    const {
      isNonScrolling = false,
      statusBarHidden = false,
      outerStyle = {},
      innerStyle = {},
      contentContainerStyle = {},
      statusBarStyle = "light-content",
      showHideTransitionStyle = "fade",
    } = this.props;

    return (
      <KeyboardAvoidingView
        style={outerStyle}
        behavior={isIos ? "padding" : "height"}
        keyboardVerticalOffset={"none"}
      >
        <StatusBar
          animated={true}
          barStyle={statusBarStyle}
          showHideTransition={showHideTransitionStyle}
          hidden={statusBarHidden}
        />
        {
          isNonScrolling ?
            <View style={innerStyle}>
              {this.props.children}
            </View>
            :
            <ScrollView
              style={innerStyle}
              contentContainerStyle={contentContainerStyle}
            >
              {this.props.children}
            </ScrollView>
        }
      </KeyboardAvoidingView>
    );
  }
}
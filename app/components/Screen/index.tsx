import { Header, Icon, Left, Right } from "native-base";
import React, { ReactElement } from "react";
import {
  ScrollView,
  StatusBar,
  StatusBarAnimation,
  StatusBarStyle,
  TextStyle,
  ViewStyle,
} from "react-native";
import { View, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Loader from "../Loader";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Logo from "../Logo";

interface ScreenProps {
  title?: string;
  hasHeader?: boolean;
  hasBackIcon?: boolean;
  hasLogo?: boolean;
  isNonScrolling?: boolean;
  statusBarHidden?: boolean;
  isLoading?: boolean;

  titleStyle?: TextStyle;
  backgroundColor?: ViewStyle;
  innerStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  statusBarStyle?: StatusBarStyle;
  showHideTransitionStyle?: StatusBarAnimation;
  children: ReactElement;
}

const Screen = (props: ScreenProps) => {
  const { goBack } = useNavigation();
  const {
    title,
    hasHeader = false,
    hasBackIcon = true,
    hasLogo = false,
    isNonScrolling = true,
    statusBarHidden = false,
    isLoading = false,

    titleStyle,
    backgroundColor = styles.background,
    innerStyle = null,
    contentContainerStyle = {},
    statusBarStyle = "light-content",
    showHideTransitionStyle = "fade",
  } = props;

  return (
    <SafeAreaView style={[styles.container, backgroundColor]}>
      <StatusBar
        animated={true}
        barStyle={statusBarStyle}
        showHideTransition={showHideTransitionStyle}
        hidden={statusBarHidden}
      />
      {hasHeader && (
        <Header style={styles.header}>
          <Left style={styles.headerLeft}>
            {[
              hasBackIcon && (
                <Icon
                  type="AntDesign"
                  name="arrowleft"
                  style={styles.goBackIcon}
                  onPress={() => goBack()}
                />
              ),
              hasLogo && <Logo type="dark" />,
            ]}
          </Left>
          <Right />
        </Header>
      )}
      {[
        title && (
          <View key="ScreenSubHeader" style={styles.subHeader}>
            <Text style={[styles.subHeaderText, titleStyle]}>{title}</Text>
          </View>
        ),
        isNonScrolling ? (
          <View
            key="ScreenView"
            style={[styles.innerContainer, innerStyle, backgroundColor]}
          >
            {props.children}
          </View>
        ) : (
          <ScrollView
            key="ScreenScrollView"
            style={[styles.innerContainer, innerStyle, backgroundColor]}
            contentContainerStyle={contentContainerStyle}
          >
            {props.children}
          </ScrollView>
        ),
        isLoading && <Loader key="Loader" isFullScreen={true} />,
      ]}
    </SafeAreaView>
  );
};

export default Screen;

import { Button, Header, Icon, Left } from "native-base";
import React, { ReactElement } from "react";
import {
  ScrollView,
  StatusBar,
  StatusBarAnimation,
  StatusBarStyle,
  ViewStyle,
} from "react-native";
import { View, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Loader from "../Loader";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface ScreenProps {
  title?: string;
  isNonScrolling?: boolean;
  statusBarHidden?: boolean;
  isLoading?: boolean;

  backgroundColor?: ViewStyle;
  innerStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  statusBarStyle?: StatusBarStyle;
  showHideTransitionStyle?: StatusBarAnimation;
  children: ReactElement;
}

const Screen = (props: ScreenProps) => {
  const {
    title,
    isNonScrolling = true,
    statusBarHidden = false,
    isLoading = false,

    backgroundColor = styles.background,
    innerStyle = null,
    contentContainerStyle = {},
    statusBarStyle = "light-content",
    showHideTransitionStyle = "fade",
  } = props;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container, backgroundColor]}>
      <StatusBar
        animated={true}
        barStyle={statusBarStyle}
        showHideTransition={showHideTransitionStyle}
        hidden={statusBarHidden}
      />
      <Header style={styles.header}>
        <Left style={styles.headerLeft}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
      </Header>
      {[
        title ? (
          <View key="ScreenSubHeader" style={styles.subHeader}>
            <Text style={styles.subHeaderText}>{title}</Text>
          </View>
        ) : null,
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

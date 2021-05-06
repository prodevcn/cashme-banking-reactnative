import React from "react";
import { ImageBackground } from "react-native";
import { View, Text, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import Screen from "../../components/Screen";
import ProfileIcon from "../../components/ProfileIcon";
import ProfileItem from "../../components/ProfileItem";
import { SECURITY_SETTINGS } from "../../constants";
import { RootState } from "../../store/index";

import styles from "./styles";

import ProfileSvg from "../../assets/images/profile.svg";
import SecuritySvg from "../../assets/images/security.svg";
import NotificationSvg from "../../assets/images/notification.svg";
import TermsSvg from "../../assets/images/terms.svg";
import LogoutIcon from "../../assets/images/logout.svg";

const Profile = () => {
  const { data } = useSelector((state: RootState) => state.profile);
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const profileItems = [
    {
      PrefixIcon: <ProfileSvg />,
      title: t("profile_settings"),
      onPress: () => {},
    },
    {
      PrefixIcon: <SecuritySvg />,
      title: t("security_settings.title"),
      onPress: () => {
        navigate(SECURITY_SETTINGS);
      },
    },
    {
      PrefixIcon: <NotificationSvg />,
      title: t("notifications"),
      onPress: () => {},
    },
    {
      PrefixIcon: <TermsSvg />,
      title: t("terms_and_conditions"),
      onPress: () => {},
    },
    {
      PrefixIcon: <TermsSvg />,
      title: t("help"),
      onPress: () => {},
    },
  ];

  return (
    <Screen isNonScrolling={false} innerStyle={styles.screenContainer}>
      <View>
        <ImageBackground
          source={require("../../assets/images/profile_bg.png")}
          style={styles.imageBackground}
        >
          <View style={styles.headerContainer}>
            <Icon
              type="Ionicons"
              name="notifications"
              style={styles.notificationIcon}
            />
            <View style={styles.profileContent}>
              <ProfileIcon style={styles.profileIcon} />
              <View style={styles.userInfo}>
                <Text style={[styles.profileText, styles.greeting]}>
                  {t("hello")},
                </Text>
                <Text style={[styles.profileText, styles.fullName]}>
                  {`${data?.firstName} ${data?.lastName}`}
                </Text>
              </View>
              <LogoutIcon style={styles.logoutIcon} />
            </View>
          </View>
          <View style={styles.headerBottomSheet} />
        </ImageBackground>
        <View style={styles.body}>
          {profileItems.map((item, index) => (
            <ProfileItem
              key={`${item.title}_${index}`}
              PrefixIcon={item.PrefixIcon}
              title={item.title}
              style={styles.profileItem}
              onPress={item.onPress}
            />
          ))}
        </View>
      </View>
    </Screen>
  );
};

export default Profile;

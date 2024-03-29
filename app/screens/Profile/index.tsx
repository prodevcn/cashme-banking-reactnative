import React from "react";
import { ImageBackground } from "react-native";
import { View, Text, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import Screen from "../../components/Screen";
import ProfileItem from "./ProfileItem";
import { SECURITY_SETTINGS } from "../../constants";
import { RootState } from "../../store/index";
import Avatar from "../../components/Avatar";
import { clearAllLocalAuth } from "../../helpers/auth";
import { logout } from "../../redux/authSlice";

import styles from "./styles";

import ProfileSvg from "../../assets/images/profile.svg";
import SecuritySvg from "../../assets/images/security.svg";
import NotificationSvg from "../../assets/images/notification.svg";
import TermsSvg from "../../assets/images/terms.svg";

const Profile = () => {
  const { data } = useSelector((state: RootState) => state.profile);
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

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

  const onLogout = () => {
    dispatch(logout());
    clearAllLocalAuth();
  };

  return (
    <Screen
      hasTabbar={true}
      isNonScrolling={false}
      innerStyle={styles.screenContainer}
    >
      <View>
        <ImageBackground
          source={require("../../assets/images/profile_bg.jpg")}
          style={styles.imageBackground}
        >
          <View style={styles.headerContainer}>
            {/* TODO: That should be changed on back-end ready */}
            <Avatar name={data?.firstName} />
            <View style={styles.userInfo}>
              <Text style={[styles.profileText, styles.greeting]}>
                {t("hello")},
              </Text>
              <Text style={[styles.profileText, styles.fullName]}>
                {`${data?.firstName} ${data?.lastName}`}
              </Text>
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

        <Button transparent style={styles.logoutBtn} onPress={onLogout}>
          <Text>{t("sign_out")}</Text>
        </Button>
      </View>
    </Screen>
  );
};

export default Profile;

import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 0,
  },
  imageBackground: {
    width: "100%",
    minHeight: 285,
  },
  headerContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 35,
    justifyContent: "space-between",
  },
  notificationIcon: {
    alignSelf: "flex-end",
    color: customColor.brandDark,
  },
  profileContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIcon: {
    width: 48,
    height: 48,
  },
  userInfo: {
    marginHorizontal: 10,
    flexGrow: 1,
  },
  profileText: {
    fontSize: 24,
    lineHeight: 29,
    color: customColor.white,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "400",
  },
  fullName: {
    fontWeight: "900",
  },
  logoutIcon: {
    alignSelf: "flex-end",
  },
  headerBottomSheet: {
    width: "100%",
    height: 50,
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    backgroundColor: customColor.white,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  profileItem: {
    marginBottom: 14,
  },
});

export default styles;

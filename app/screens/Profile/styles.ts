import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 0,
  },
  imageBackground: {
    width: "100%",
    minHeight: 220,
  },
  headerContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 35,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  userInfo: {
    marginHorizontal: 10,
    flexGrow: 1,
  },
  profileText: {
    fontSize: 22,
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
  logoutBtn: {
    alignSelf: "center",
  },
});

export default styles;

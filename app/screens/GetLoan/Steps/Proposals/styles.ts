import { StyleSheet } from "react-native";
import customColor from "../../../../theme/customColor";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  title: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
    color: customColor.brandDark,
    textTransform: "uppercase",
    marginBottom: 15,
  },
  autoFill: {
    flex: 0,
  },
  proposal: {
    marginBottom: 10,
  },
  profileBlock: {
    borderBottomWidth: 1,
    borderBottomColor: customColor.gray,
    paddingBottom: 10,
    marginBottom: 15,
  },
  profileBlockIcon: {
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    width: 45,
    height: 45,
  },
  nameBlockText: {
    fontSize: 14,
    lineHeight: 30,
    color: customColor.dodgerBlue,
  },
  contentDivider: {
    width: 1,
    backgroundColor: customColor.gray,
    marginHorizontal: 10,
  },
  contentText: {
    fontSize: 12,
    lineHeight: 16,
    color: customColor.brandGray,
  },
});

export default styles;

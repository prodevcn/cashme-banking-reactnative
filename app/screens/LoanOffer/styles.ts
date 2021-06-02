import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  innerStyle: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
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
  loanOffer: {
    marginBottom: 10,
  },
  profileBlock: {
    borderBottomWidth: 1,
    borderBottomColor: customColor.gray,
    paddingBottom: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  profileBlockIcon: {
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  nameBlockText: {
    fontSize: 14,
    lineHeight: 30,
    color: customColor.dodgerBlue,
  },
  contentText: {
    fontSize: 12,
    lineHeight: 16,
    color: customColor.brandGray,
  },
});

export default styles;

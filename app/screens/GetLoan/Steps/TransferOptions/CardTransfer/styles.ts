import { StyleSheet } from "react-native";
import customColor from "../../../../../theme/customColor";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  autoFill: {
    flex: 0,
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 5,
  },
  description: {
    fontSize: 10,
    lineHeight: 11,
    color: customColor.brandGray,
    marginBottom: 8,
  },
  amount: {
    fontSize: 28,
    fontWeight: "bold",
    color: customColor.brandDark,
  },
  leftSide: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 25,
  },
  icon: {
    marginBottom: 15,
  },
  dropdown: {
    marginTop: 15,
    marginBottom: 25,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: customColor.gray,
    paddingLeft: 15,
  },
  loanTerm: {
    marginBottom: 20,
  },
  confirmBtn: {
    paddingVertical: 11,
    paddingHorizontal: 45,
    alignSelf: "center",
  },
  confirmBtnText: {
    fontSize: 18,
    lineHeight: 24,
    textTransform: "uppercase",
  },
});

export default styles;

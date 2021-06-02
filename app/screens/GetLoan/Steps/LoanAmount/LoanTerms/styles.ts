import { StyleSheet } from "react-native";
import customColor from "../../../../../theme/customColor";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  autoFill: {
    flex: 0,
  },
  label: {
    fontSize: 14,
    lineHeight: 24,
    color: customColor.brandGray,
  },
  value: {
    fontSize: 14,
    lineHeight: 24,
    color: customColor.brandGray,
  },
  loanAmount: {
    fontWeight: "bold",
    color: customColor.dodgerBlue,
  },
});

export default styles;

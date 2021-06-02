import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  codeFiledRoot: {
    marginTop: 20,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: customColor.brandGray,
    borderBottomWidth: 1,
  },
  cellText: {
    color: customColor.black,
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: customColor.brandBlue,
    borderBottomWidth: 2,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  summary: {
    flexDirection: "row",
    justifyContent: "center",
  },
  item: {
    paddingHorizontal: 10,
  },
  rightBorder: {
    borderRightWidth: 1,
    borderRightColor: customColor.brandGrayLight,
  },

  text: {
    color: customColor.black,
  },
});

export default styles;

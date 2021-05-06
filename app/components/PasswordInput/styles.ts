import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  passwordSection: {
    marginTop: 20,
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    top: 20,
    alignSelf: "flex-end",
  },
  inputLabel: {
    color: customColor.black,
  },
});

export default styles;

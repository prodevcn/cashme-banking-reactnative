import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: "90%",
    alignSelf: "center",
  },
  button: {
    marginVertical: 20,
    height: 54,
    elevation: 0,
  },
  forgotPassword: {
    alignSelf: "flex-end",
  },
  inputLabel: {
    color: customColor.black,
  },
});

export default styles;

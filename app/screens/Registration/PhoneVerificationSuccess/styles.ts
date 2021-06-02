import { StyleSheet } from "react-native";
import customColor from "../../../theme/customColor";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    marginTop: 50,
  },
  icon: {
    alignSelf: "center",
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: customColor.brandGray,
    marginBottom: 80,
    textAlign: "center",
  },
  button: {
    marginHorizontal: 20,
  },
});

export default styles;

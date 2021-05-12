import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  content: {
    width: "100%",
    alignSelf: "center",
  },
  caption: {
    paddingVertical: 50,
    color: customColor.masala,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  questionIcon: {
    color: "#FFBB22",
    marginRight: 5,
  },
  text: {
    marginTop: 3,
    maxWidth: 250,
  },
  button: {
    marginTop: 50,
  },
});

export default styles;

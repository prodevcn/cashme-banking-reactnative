import { StyleSheet, Dimensions } from "react-native";
import customColor from "../../theme/customColor";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 0,
    backgroundColor: "blue",
  },
  content: {
    width: "100%",
    alignSelf: "center",
    flex: 1,
    paddingHorizontal: 30,
  },
  pageCaption: {
    color: customColor.masala,
    marginBottom: 50,
  },
  button: {
    marginTop: 50,
  },
  formArea: {
    marginTop: 50,
  },
  questionItem: {
    marginVertical: 10,
    flexDirection: "row",
  },
});

export default styles;

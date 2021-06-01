import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 50,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  profileIcon: {
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 40,
  },
  checkmarkIcon: {
    top: 100,
    right: 35,
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: customColor.brandGray,
    marginBottom: 50,
    textAlign: "center",
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default styles;

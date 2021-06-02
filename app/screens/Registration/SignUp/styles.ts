import { StyleSheet } from "react-native";
import customColor from "../../../theme/customColor";

const styles = StyleSheet.create({
  content: {
    width: "100%",
    alignSelf: "center",
  },
  caption: {
    color: customColor.masala,
    marginBottom: 30,
  },
  inputSection: {
    marginVertical: 10,
  },
  inputIcon: {
    fontSize: 18,
  },
  inputValidIcon: {
    fontSize: 18,
    color: customColor.dodgerBlue,
  },
  button: {
    marginTop: 30,
  },
  checkboxContainer: {
    borderBottomWidth: 0,
    marginLeft: 0,
  },
  termsConditions: {
    fontSize: 12,
  },
  accountText: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
  },
  signUp: {
    height: 10,
  },
  signUpLink: {
    color: customColor.dodgerBlue,
    fontSize: 13,
    paddingLeft: 0,
  },
});

export default styles;

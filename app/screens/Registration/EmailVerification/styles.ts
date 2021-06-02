import { StyleSheet } from "react-native";
import customColor from "../../../theme/customColor";

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
  },
  contentInfo: {
    paddingVertical: 50,
    color: customColor.brandGray,
  },
  contentInfoUsername: {
    color: customColor.black,
    fontWeight: "bold",
  },
  inputLabel: {
    color: customColor.masala,
  },
  resendButton: {
    margin: 20,
    textAlign: "left",
  },
  resendButtonIcon: {
    marginLeft: 0,
    marginRight: 0,
  },
  inputContainer: {
    width: "90%",
    alignSelf: "center",
  },
});

export default styles;

import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  contentInfo: {
    paddingVertical: 50,
    textAlign: "center",
    color: "#707070",
  },
  contentInfoUsername: {
    color: "black",
    fontWeight: "bold",
  },
  inputLabel: {
    color: "#443C38",
  },
  button: {
    marginTop: 20,
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
    borderBottomColor: "#707070",
    borderBottomWidth: 1,
  },
  cellText: {
    color: customColor.black,
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "#007AFF",
    borderBottomWidth: 2,
  },
});

export default styles;

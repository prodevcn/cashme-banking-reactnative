import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

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
    borderBottomColor: customColor.brandGray,
    borderBottomWidth: 1,
  },
  cellText: {
    color: customColor.black,
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: customColor.brandBlue,
    borderBottomWidth: 2,
  },
});

export default styles;

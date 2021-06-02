import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  img: {
    alignItems: "center",
  },
  imgWrapper: {
    justifyContent: "center",
    backgroundColor: "#EBF6FF",
    height: 98,
    width: 98,
    borderRadius: 49,
  },
  icon: {
    left: 30,
  },

  listItem: {
    alignItems: "flex-start",
    borderBottomWidth: 0,
    paddingHorizontal: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  checkboxLabel: {
    fontSize: 9,
    marginRight: 0,
  },

  pdfLink: {
    fontSize: 9,
    color: customColor.dodgerBlue,
  },

  codeInputLabel: {
    marginTop: 20,
  },

  getCodeButton: {
    marginTop: 30,
  },
});

export default styles;

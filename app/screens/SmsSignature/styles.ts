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
    marginHorizontal: 0,
  },
  checkboxLabel: {
    fontSize: 9,
    marginRight: 0,
  },

  pdfLink: {
    fontSize: 9,
    color: customColor.dodgerBlue,
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

  getCodeButton: {
    marginTop: 30,
  },
});

export default styles;

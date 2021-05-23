import { StyleSheet, Dimensions } from "react-native";
import customColor from "../../../../theme/customColor";

const styles = StyleSheet.create({
  questionBox: {
    width: "100%",
    borderWidth: 1,
    borderColor: customColor.brandBlueLight,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  minimizedBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  extendedBox: {
    backgroundColor: customColor.brandBlueLight,
  },
  question: {
    color: customColor.brandDark,
    fontWeight: "bold",
    marginBottom: 10,
  },
  answer: {
    color: customColor.brandGray,
  },
  descriptionSection: {
    flex: 9,
  },
  buttonSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centerPosition: {
    alignSelf: "center",
  },
  shapedBtn: {
    alignSelf: "center",
  },
  questionTxt: {
    color: customColor.brandGray,
  },
});

export default styles;

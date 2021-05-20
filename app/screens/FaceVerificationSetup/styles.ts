import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const radius = 70;

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: 50,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 45,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftBoxSideShadow: {
    height: radius,
    width: radius,
    borderRadius: radius,
    backgroundColor: "transparent",
    shadowColor: customColor.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  leftBoxSide: {
    height: radius,
    width: radius,
    backgroundColor: customColor.white,
    borderRadius: radius,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  stepNum: {
    fontSize: 25,
    lineHeight: 30,
    color: customColor.dodgerBlue,
  },
  stepTxt: {
    fontSize: 14,
    lineHeight: 16,
    color: customColor.brandDark,
  },
  boxTitle: {
    fontSize: 20,
    lineHeight: 24,
    color: customColor.brandDark,
    marginBottom: 10,
  },
  boxDesc: {
    fontSize: 12,
    lineHeight: 15,
    color: customColor.masala,
    marginBottom: 6,
  },
  rightBoxSide: {
    flex: 1,
  },
  boxID: {
    fontSize: 22,
    lineHeight: 27,
    marginBottom: 2,
  },
  btnID: {
    fontSize: 12,
    lineHeight: 14,
    color: customColor.dodgerBlue,
    textDecorationLine: "underline",
    marginBottom: 50,
  },
  boxDescContainer: {
    flexDirection: "row",
  },
  boxDescIcon: {
    marginRight: 5,
  },
  stepper: {
    marginRight: 30,
    alignItems: "center",
  },
  line: {
    flex: 1,
    width: 5,
    backgroundColor: "#F0F8FF",
  },
  takeSelfieBtn: {
    marginTop: 30,
  },
});

export const sheetStyles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    color: customColor.brandDark,
    marginBottom: 20,
  },
  description: {
    fontSize: 17,
    lineHeight: 20,
    color: customColor.masala,
    marginBottom: 30,
  },
  buttonContainer: {
    marginHorizontal: 50,
  },
  button: {
    marginBottom: 20,
  },
  note: {
    fontSize: 12,
    lineHeight: 15,
    color: customColor.masala,
  },
});

export default styles;

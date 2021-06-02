import { StyleSheet } from "react-native";
import customColor from "../../../theme/customColor";

const styles = StyleSheet.create({
  cardShadow: {
    borderRadius: 6,
    backgroundColor: "transparent",
    shadowColor: customColor.brandPrimary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  cardContainer: {
    backgroundColor: customColor.white,
    borderRadius: 6,

    paddingHorizontal: 18,
    paddingVertical: 14,
    height: "auto",
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 5,
  },
  description: {
    fontSize: 10,
    lineHeight: 11,
    color: customColor.brandGray,
    marginBottom: 8,
  },
  amount: {
    fontSize: 28,
    fontWeight: "bold",
    color: customColor.brandDark,
  },
  rightSide: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 40,
    marginBottom: 15,
  },
  button: {
    height: "auto",
  },
  buttonText: {
    fontSize: 12,
    lineHeight: 14,
  },
});

export default styles;

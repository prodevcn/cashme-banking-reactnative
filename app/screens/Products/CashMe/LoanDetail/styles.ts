import { StyleSheet, Dimensions } from "react-native";
import customColor from "../../../../theme/customColor";

const styles = StyleSheet.create({
  dropDownBox: {
    top: -60,
    width: "95%",
    borderRadius: 20,
    backgroundColor: customColor.white,
    shadowColor: customColor.black,
    shadowOpacity: 1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 5,
    padding: 10,
    alignSelf: "center",
  },
  innerContainer: {
    paddingHorizontal: 10,
  },
  headerTitle: {
    textAlign: "center",
    color: customColor.brandDark,
    marginBottom: 5,
  },
  infoTitle: {
    color: customColor.brandGray,
  },
  infoValue: {
    textAlign: "center",
    fontWeight: "bold",
    color: customColor.black,
    fontSize: 12,
  },
  infoCol: {
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
  },
  infoColRightBorder: {
    borderRightColor: customColor.brandGrayLight,
    borderRightWidth: 1,
  },
  infoTitleSection: {
    width: "90%",
    flex: 1,
  },
  amountSection: {
    width: "100%",
    flexDirection: "row",
  },
  primaryColor: {
    color: customColor.brandPrimary,
  },
  moreBtn: {
    color: customColor.dodgerBlue,
    textTransform: "uppercase",
  },
  arrowBtn: {
    width: 20,
    height: 20,
    color: customColor.brandPrimary,
  },
  smallFont: {
    fontSize: 8,
  },
  mediumFont: {
    fontSize: 12,
  },
  centerPosition: {
    alignSelf: "center",
  },
  listItemRow: {
    marginVertical: 5,
  },
  darkColored: {
    color: customColor.black,
    fontWeight: "bold",
  },
  minimizedBox: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default styles;

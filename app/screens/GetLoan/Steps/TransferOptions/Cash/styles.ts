import { StyleSheet } from "react-native";
import customColor from "../../../../../theme/customColor";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  autoFill: {
    flex: 0,
  },
  center: {
    alignSelf: "center",
  },
  locationsBtn: {
    borderRadius: 6,
    backgroundColor: customColor.white,
    shadowColor: customColor.dodgerBlue,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    marginHorizontal: 20,
    paddingVertical: 19,
    paddingRight: 17,
    paddingLeft: 23,
  },
  locationsBtnText: {
    fontSize: 16,
    lineHeight: 19,
    textTransform: "uppercase",
    color: customColor.brandDark,
  },
  map: {
    height: 230,
    marginBottom: 28,
  },
  mapIconContainer: {
    marginRight: 23,
  },
  arrowIconContainer: {
    marginLeft: 10,
  },
  arrowIcon: {
    fontSize: 28,
    color: customColor.brandDark,
  },
  confirmBtn: {
    marginTop: 110,
    paddingHorizontal: 35,
  },
  confirmBtnText: {
    fontSize: 18,
    lineHeight: 24,
    textTransform: "uppercase",
  },
});

export default styles;

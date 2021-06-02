import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  autoFill: {
    flex: 0,
  },

  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
  },

  dropdownSheet: {
    backgroundColor: customColor.white,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },

  realizeYearlyRate: {
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

    paddingVertical: 12,
    paddingHorizontal: 14,

    alignItems: "center",

    marginBottom: 40,
  },
  realizeYearlyRatePrefix: {
    marginRight: 10,
  },
  realizeYearlyRateText: {
    fontSize: 14,
    lineHeight: 16,
    textTransform: "uppercase",
    paddingRight: 15,
  },
  realizeYearlyRatePostfix: {
    justifyContent: "center",
  },
  asterisk: {
    position: "absolute",
    top: 0,
    right: 10,
    fontSize: 21,
    lineHeight: 24,
    color: customColor.red,
  },

  modalContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 23,
    lineHeight: 28,
    color: customColor.brandDark,
  },
  formContainer: {
    flexDirection: "row",
    marginTop: 22,
    marginBottom: 15,
  },
  formItem: {
    borderRadius: 4,
  },
  rate: {
    flex: 0,
    fontSize: 24,
    color: customColor.dodgerBlue,
    marginLeft: 10,
    alignSelf: "center",
  },
  description: {
    fontSize: 14,
    lineHeight: 24,
    color: customColor.brandGray,
  },
  descriptionHighlight: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 24,
    color: customColor.dodgerBlue,
  },
});

export default styles;

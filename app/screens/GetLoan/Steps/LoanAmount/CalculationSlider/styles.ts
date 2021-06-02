import { StyleSheet } from "react-native";
import customColor from "../../../../../theme/customColor";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: customColor.gray,
    paddingHorizontal: 10,
    marginBottom: 13,
  },
  sliderStyle: {
    height: "auto",
    marginTop: 5,
    marginBottom: 15,
  },
  thumbStyle: {
    shadowColor: customColor.white,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  trackStyle: {
    height: 8,
    borderRadius: 7,
  },
  monthlyPayableSizeExplanation: {
    fontSize: 19,
    lineHeight: 22,
    textAlign: "center",
    textTransform: "uppercase",
    color: customColor.black,
    marginBottom: 23,
  },
  monthlyPayableSize: {
    textAlign: "center",
    color: customColor.green,
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
  },
  duration: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 30,
    textAlign: "center",
    color: customColor.black,
  },
  durationSubText: {
    fontSize: 9,
    lineHeight: 16,
    fontStyle: "italic",
    textAlign: "center",
    color: customColor.black,
    marginBottom: 20,
  },
});

export default styles;

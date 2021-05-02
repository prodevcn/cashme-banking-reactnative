import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "#61a1ef",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },

  pinCodeButtonCircle: {
    height: 76,
    width: 76,
    borderRadius: 48,
    backgroundColor: customColor.brandPrimary,
  },
  pinCodeDeleteButtonText: {
    display: "none",
  },
  pinCodeRowButtons: {
    width: "100%",
    justifyContent: "space-around",
  },

  pinCodeCircle: {
    borderRadius: 20,
    height: 15,
    width: 15,
    backgroundColor: customColor.brandPrimary,
  },
});

export default styles;

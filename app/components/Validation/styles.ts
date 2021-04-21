import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  errorContainer: {
    flexDirection: "row",
  },
  error: {
    color: "red",
    width: "100%",
    marginLeft: 3,
    fontSize: 12,
  },
  alertIcon: {
    width: 15,
    height: 15,
    top: 1,
  },
  invalid: {
    borderColor: "red",
  },
});

export default styles;

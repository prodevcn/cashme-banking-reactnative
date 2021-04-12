import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  errorContainer: {
    flexDirection: "row",
    marginLeft: 20,
  },
  error: {
    color: "red",
    width: "100%",
    marginLeft: 5,
    fontSize: 12,
  },
  alertIcon: {
    fontSize: 15,
    color: "red",
  },
  invalid: {
    borderColor: "red",
  },
});

export default styles;

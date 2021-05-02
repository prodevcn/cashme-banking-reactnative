import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    height: 69,
    borderRadius: 15,
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    paddingLeft: 50,
  },
  buttonUpperText: {
    fontSize: 20,
    textAlign: "left",
    width: "100%",
  },
  buttonLowerText: {
    fontSize: 12,
    textAlign: "left",
    width: "100%",
  },
  buttonRightIcon: {
    position: "absolute",
    right: 15,
  },
  buttonLeftIcon: {
    position: "absolute",
    left: 20,
  },
});

export default styles;

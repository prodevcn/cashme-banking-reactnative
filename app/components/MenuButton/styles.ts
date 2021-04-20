import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    height: 69,
    borderRadius: 15,
    marginTop: 20,
    borderColor: "white",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 60,
  },
  buttonUpperText: {
    color: "white",
    fontSize: 20,
    textAlign: "left",
    width: "100%",
  },
  buttonLowerText: {
    color: "white",
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

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "auto",
    height: "auto",
  },
  background: {
    alignItems: "center",
  },
  icon: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: "#32506E",
    textTransform: "uppercase",
    fontSize: 13,
    lineHeight: 15,
    textAlign: "center",
  },
});

export default styles;

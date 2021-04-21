import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#F7C59F",
    opacity: 0.9,
  },

  button: {
    marginTop: 20,
    width: "90%",
    height: 54,
    alignSelf: "center",
  },
  accountText: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  signUpLink: {
    color: "#1B8CF4",
    fontSize: 13,
  },
});

export default styles;

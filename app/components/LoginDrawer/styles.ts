import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  blurArea: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  blured: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    marginTop: 20,
    width: "90%",
    height: 54,
    alignSelf: "center",
    elevation: 0,
  },
  accountText: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  signUp: {
    height: 10,
  },
  signUpLink: {
    color: customColor.dodgerBlue,
    fontSize: 13,
    paddingLeft: 0,
  },
});

export default styles;

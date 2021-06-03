import { StyleSheet, Dimensions } from "react-native";
import customColor from "../../../../theme/customColor";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  fullScreen: {
    paddingHorizontal: 0,
  },
  container: {
    flex: 1,
  },
  maskView: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  backBtn: {
    top: 10,
    left: 30,
  },
  ctrlSection: {
    position: "absolute",
    bottom: 50,
    alignItems: "center",
  },
  buttonOuter: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 1000,
    borderWidth: 5,
    borderColor: customColor.white,
    padding: 5,
    marginTop: 20,
  },
  buttonInner: {
    width: "100%",
    height: "100%",
    backgroundColor: customColor.white,
    borderRadius: 1000,
  },
  cameraMessage: {
    marginTop: 50,
    color: customColor.white,
  },
  sheetContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 24,
    color: customColor.brandDark,
  },
  term: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  description: {
    marginLeft: 10,
    color: customColor.masala,
  },
  button: {
    width: "100%",
    backgroundColor: customColor.brandBlue,
    paddingVertical: 15,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: customColor.white,
  },
});

export default styles;

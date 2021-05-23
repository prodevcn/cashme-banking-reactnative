import { StyleSheet } from "react-native";
import customColor from "../../../theme/customColor";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  screenContainer: {
    paddingHorizontal: 0,
  },
  button: {
    marginTop: 50,
    width: "100%",
    height: 54,
    alignSelf: "center",
    elevation: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 23,
    color: customColor.brandDark,
    marginBottom: 7,
    textTransform: "uppercase",
  },
  workFlow: {
    alignItems: "center",
  },
  verticalMargin: {
    marginVertical: 20,
  },
  bottomSpace: {
    marginBottom: 30,
  },
});

export default styles;

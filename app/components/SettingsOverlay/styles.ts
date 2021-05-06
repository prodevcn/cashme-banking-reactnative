import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "#32506E",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    marginVertical: 20,
  },
  title: {
    marginTop: 15,
    alignSelf: "flex-start",
    width: 300,
  },
  titleText: {
    color: customColor.white,
    fontSize: 16,
    lineHeight: 25,
  },
  buttonSection: {
    width: "100%",
  },

  actionButton: {
    marginTop: 40,
  },
  skipText: {
    color: customColor.white,
    fontSize: 22,
  },
  dismissText: {
    color: customColor.white,
    fontSize: 12,
  },
});

export default styles;

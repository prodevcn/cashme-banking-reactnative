import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 30,
    marginBottom: 100,
  },
  background: {
    backgroundColor: customColor.white,
  },
  header: {
    backgroundColor: customColor.white,
    borderBottomWidth: 0,
    paddingLeft: 0,
  },
  headerLeft: {
    flexDirection: "row",
    marginLeft: 24,
  },
  subHeader: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  subHeaderText: {
    fontSize: 36,
    lineHeight: 43,
    color: customColor.brandDark,
  },
  goBackIcon: {
    color: customColor.dodgerBlue,
    marginRight: 10,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  header: {
    flex: 0,
    height: 50,
    alignItems: "center",
  },
  headerLeftRight: {
    width: 40,
  },
  headerLeft: {
    marginLeft: 25,
  },
  headerRight: {
    marginRight: 15,
    justifyContent: "center",
  },
  headerRightText: {
    alignItems: "center",
    height: "auto",
    justifyContent: "flex-end",
  },
  pageNumber: {
    fontSize: 22,
    lineHeight: 27,
    color: customColor.brandPrimary,
  },
  pageCount: {
    fontSize: 15,
    lineHeight: 18,
    alignSelf: "flex-start",
    color: customColor.brandDark,
  },
  headerBodyText: {
    fontSize: 22,
    lineHeight: 27,
    textAlign: "center",
    color: customColor.brandDark,
  },
  goBackIcon: {
    color: customColor.dodgerBlue,
  },
  progressBarContainer: {
    backgroundColor: "#FAFAFA",
  },
  progressBar: {
    height: 4,
    backgroundColor: customColor.brandPrimary,
  },
});

export default styles;

import { StyleSheet, Dimensions } from "react-native";
import customColor from "../../../../theme/customColor";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: 837,
    marginTop: 50,
    alignItems: "center",
    width: "100%",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: 20,
    paddingHorizontal: 10,
    resizeMode: "cover",
    aspectRatio: 1,
  },
  nodeMain: {
    position: "absolute",
    width: "100%",
  },
  node: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  leftSorted: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 5,
  },
  rightSorted: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 5,
  },
  stepTitle: {
    fontSize: 18,
    color: customColor.dodgerBlue,
    marginBottom: 5,
  },
  title: {
    fontWeight: "bold",
    color: customColor.black,
    marginBottom: 5,
  },
  caption: {
    fontSize: 12,
    color: customColor.brandGray,
  },
  simpleText: {
    color: customColor.brandBlue,
    alignSelf: "center",
    position: "absolute",
    bottom: -30,
  },
});

export default styles;

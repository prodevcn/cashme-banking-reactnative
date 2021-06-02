import { StyleSheet } from "react-native";
import customColor from "../../../theme/customColor";

const styles = StyleSheet.create({
  cardShadow: {
    borderRadius: 16,
    backgroundColor: "transparent",
    shadowColor: customColor.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  container: {
    backgroundColor: customColor.white,
    borderRadius: 16,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 21,
    paddingRight: 12,
    paddingVertical: 21,
    minHeight: 66,
    flex: 1,
  },
  prefix: {
    width: 40,
    justifyContent: "center",
    resizeMode: "contain",
  },
  postfix: {
    color: customColor.brandDark,
  },
  text: {
    flex: 1,
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
    color: customColor.brandDark,
    flexWrap: "wrap",
  },
});

export default styles;

import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  btn: {
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  btnText: {
    width: "90%",
    paddingLeft: 0,
  },

  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
  },

  dropdownSheet: {
    backgroundColor: customColor.white,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },

  header: {
    paddingVertical: 25,
  },
  headerText: {
    fontSize: 28,
    color: customColor.brandDark,
  },

  separator: {
    height: 1,
    width: "100%",
    backgroundColor: customColor.gray,
  },

  item: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  itemIcon: {
    color: customColor.brandPrimary,
    fontSize: 20,
  },
  itemText: {
    color: customColor.gray,
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: "500",
  },
  selectedItemText: {
    color: customColor.brandPrimary,
    fontWeight: "600",
  },
});

export default styles;
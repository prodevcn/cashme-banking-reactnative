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
    paddingVertical: 10,
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
    paddingTop: 10,
    paddingBottom: 8,
  },
  itemIcon: {
    color: customColor.brandPrimary,
    fontSize: 25,
  },
  itemText: {
    width: "90%",
    color: customColor.gray,
    fontSize: 16,
    paddingLeft: 10,
    paddingTop: 1,
    fontWeight: "500",
  },
  selectedItemText: {
    color: customColor.brandPrimary,
    fontWeight: "600",
  },
});

export default styles;

import { StyleSheet } from "react-native";
import customColor from "../../../../theme/customColor";

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },

  name: {
    alignItems: "center",
    marginBottom: 5,
  },
  nameText: {
    color: customColor.dodgerBlue,
    fontSize: 16,
  },

  horizontalSummary: {
    marginBottom: 30,
  },

  item: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },

  itemLabel: {
    width: "30%",
  },

  itemValue: {
    flexShrink: 1,
  },
  itemValueText: {
    flexShrink: 1,
  },

  label: {
    color: "#B9B9B9",
    fontSize: 16,
  },

  phoneInput: {
    marginBottom: 20,
  },

  dropdown: {
    marginBottom: 30,
  },

  submitBtn: {
    marginBottom: 50,
  },
});

export default styles;

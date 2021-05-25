import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    marginBottom: 20,
  },
  container: {
    paddingHorizontal: 0,
  },
  listItem: {
    paddingHorizontal: 20,
  },
  icon: {
    flex: 0,
    marginRight: 16,
  },
  textDefault: {
    alignSelf: "flex-start",
    fontSize: 12,
    lineHeight: 14,
  },
  open: {
    color: customColor.green,
  },
  closed: {
    color: customColor.red,
  },
});

export default styles;

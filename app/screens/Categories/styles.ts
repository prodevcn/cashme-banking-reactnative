import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    lineHeight: 43,
    color: customColor.brandDark,
    marginTop: 10,
    marginBottom: 30,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  item: {
    marginBottom: 10,
    marginHorizontal: 4,
  },
  notificationIcon: {
    color: customColor.brandDark,
  },
});

export default styles;

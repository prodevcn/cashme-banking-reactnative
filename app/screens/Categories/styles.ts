import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    marginBottom: 30,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  item: {
    width: "50%",
    marginBottom: 10,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import customColor from "../../../../theme/customColor";

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
    paddingVertical: 10,
    marginVertical: 5,
  },
  textSection: {
    flex: 1,
    paddingLeft: 20,
    paddingVertical: 0,
  },
  subject: {
    fontSize: 20,
    color: customColor.black,
  },
  description: {
    color: customColor.brandGray,
  },
});

export default styles;

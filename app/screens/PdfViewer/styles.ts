import { Dimensions, StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

const styles = StyleSheet.create({
  viewer: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("window").height,
  },
});

export default styles;

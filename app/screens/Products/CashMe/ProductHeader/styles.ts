import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  headerBackground: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 70,
    paddingHorizontal: 30,
    resizeMode: "cover",
    height: height * 0.5,
    justifyContent: "space-around",
  },
  container: {
    paddingHorizontal: 30,
  },
  backBtn: {
    width: 32,
  },
  logo: {
    marginTop: 10,
  },
  description: {
    width: "100%",
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    paddingVertical: 0,
    alignSelf: "flex-start",
  },
  upper: {
    textTransform: "uppercase",
  },
});

export default styles;

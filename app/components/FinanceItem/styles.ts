import { StyleSheet } from "react-native";
import customColor from "../../theme/customColor";

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
  cardContainer: {
    backgroundColor: customColor.white,
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 11,
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
  leftContent: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    lineHeight: 23,
    color: customColor.brandDark,
    marginBottom: 7,
  },
  description: {
    fontSize: 12,
    lineHeight: 14,
    color: "#707070",
    marginBottom: 10,
  },
  button: {
    paddingVertical: 0,
    paddingHorizontal: 5,
    height: "auto",
  },
  imageContainer: {
    justifyContent: "center",
    maxHeight: 100,
    overflow: "hidden",
  },
  image: {
    width: 120,
    resizeMode: "contain",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 13,
  },
  infoItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  middleInfoItem: {
    flex: 1.5,
  },
  infoTitle: {
    fontSize: 12,
    lineHeight: 14,
    color: customColor.brandDark,
    textAlign: "center",
  },
  infoDescription: {
    fontSize: 12,
    lineHeight: 15,
    color: "black",
    textAlign: "center",
  },
  divider: {
    width: 1,
    backgroundColor: "#E2E2E2",
  },
});

export default styles;

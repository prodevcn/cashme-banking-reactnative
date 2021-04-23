import { StyleSheet, Platform } from "react-native";

export const paginationStyle = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    top: "3%",
  },
  dotContainer: {
    marginHorizontal: 22,
  },
  dot: {
    width: 40,
    height: 6,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 0,
  },
});

export const parallaxStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  textContainer: {
    position: "absolute",
    zIndex: 1,
    top: "20%",
    left: 0,
    right: 0,
    marginHorizontal: 22,
  },
  title: {
    fontSize: 44,
    lineHeight: 54,
  },
  description: {
    fontSize: 24,
    lineHeight: 29,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "white",
  },
});

export const carouselStyle = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    resizeMode: "cover",
  },
});

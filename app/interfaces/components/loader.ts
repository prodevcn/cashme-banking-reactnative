import { ColorValue } from "react-native";

export interface LoaderProps {
  isFullScreen?: boolean;
  size?: "small" | "large"; // number works just for Android
  color?: ColorValue;
}
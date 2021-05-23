import React from "react";
import { Image } from "react-native";

interface LoadingBufferingProps {
  size?: number;
}

const LoadingBuffering = (props: LoadingBufferingProps) => {
  return (
    <Image
      source={require("../../assets/images/loading-buffering.gif")}
      style={{ width: props.size, height: props.size }}
    />
  );
};

export default LoadingBuffering;

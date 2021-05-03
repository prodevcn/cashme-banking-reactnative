import React from "react";
import { Animated } from "react-native";

const ShakingComponent = (props: any) => {
  const fadeAnim = new Animated.Value(0);

  const startShake = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 10,
        duration: 15,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: -10,
        duration: 15,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 10,
        duration: 15,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 15,
        useNativeDriver: true,
      }),
    ]).start();
  };

  if (props.shake) {
    startShake();
  }

  return (
    <Animated.View style={{ transform: [{ translateX: fadeAnim }] }}>
      {props.children}
    </Animated.View>
  );
};

export default ShakingComponent;

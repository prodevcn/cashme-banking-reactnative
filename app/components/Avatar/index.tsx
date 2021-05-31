import React from "react";
import { Text, Thumbnail, View } from "native-base";

import styles from "./styles";

interface AvatarProps {
  source?: string;
  width?: number;
  height?: number;
  name?: string;
}

const Avatar = ({
  source,
  width = 50,
  height = 50,
  name = "",
}: AvatarProps) => {
  if (!source) {
    return (
      <View
        style={[
          styles.textContainer,
          { width, height, borderRadius: width / 2 },
        ]}
      >
        <Text
          style={{
            fontSize: width / 2,
          }}
          adjustsFontSizeToFit={true}
        >
          {name[0]}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Thumbnail style={{ height, width }} source={{ uri: source }} />
    </View>
  );
};

export default Avatar;

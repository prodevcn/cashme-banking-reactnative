import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

interface ListItemProps {
  subject?: string;
  description?: string;
  image?: any;
}

const ListItem = (props: ListItemProps) => {
  const { subject = null, description = null, image = null } = props;

  return (
    <View style={styles.listItem}>
      {image}
      <View style={styles.textSection}>
        <Text style={styles.subject}>{subject}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default ListItem;

import React, { ComponentType } from "react";
import { compose } from "redux";
import { View, Text } from "native-base";
import withLoginDrawer from "../../hocs/withLoginDrawer";

import styles from "./styles";

const Terms = () => {
  return (
    <View style={styles.container}>
      <Text>Terms</Text>
    </View>
  );
};

export default compose<ComponentType>(withLoginDrawer)(Terms);

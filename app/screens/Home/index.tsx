import React, { ComponentType } from "react";
import { compose } from "redux";
import { View } from "native-base";
import withLoginDrawer from "../../hocs/withLoginDrawer";
import Screen from "../../components/Screen";
import Slider from "../../components/Slider";

import styles from "./styles";

const Home = () => {
  const data = [
    {
      image: require("../../assets/images/products/cashme.png"),
      title: "Cash me",
      description: "Receive money in your account in as little as 5 min",
      redirectScreenName: "",
    },
    {
      image: require("../../assets/images/products/arpi-solar.png"),
      title: "Arpi Solar",
      description: "Receive money in your account in as little as 5 min",
      redirectScreenName: "",
    },
    {
      image: require("../../assets/images/products/pay-later.png"),
      title: "Pay for me",
      description: "Receive money in your account in as little as 5 min",
      redirectScreenName: "",
    },
  ];

  return (
    <Screen>
      <View style={styles.container}>
        <Slider data={data} />
      </View>
    </Screen>
  );
};

export default compose<ComponentType>(withLoginDrawer)(Home);

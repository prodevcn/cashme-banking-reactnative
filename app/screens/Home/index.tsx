import React, { ComponentType } from "react";
import { compose } from "redux";
import { View } from "native-base";
import withLoginDrawer from "../../hocs/withLoginDrawer";
import Slider from "../../components/Slider";

import styles from "./styles";

const Home = () => {
  const data = [
    {
      imageUri: "https://i.imgur.com/UYiroysl.jpg",
      title: "Cash me",
      description: "Receive money in your account in as little as 5 min",
      redirectSource: "",
    },
    {
      imageUri: "https://i.imgur.com/UPrs1EWl.jpg",
      title: "Arpi Solar",
      description: "Receive money in your account in as little as 5 min",
      redirectSource: "",
    },
    {
      imageUri: "https://i.imgur.com/MABUbpDl.jpg",
      title: "Pay for me",
      description: "Receive money in your account in as little as 5 min",
      redirectSource: "",
    },
  ];

  return (
    <View style={styles.container}>
      <Slider data={data} />
    </View>
  );
};

export default compose<ComponentType>(withLoginDrawer)(Home);

import React, { useEffect } from "react";
import { View } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../../components/Slider";
import LoginDrawer from "../../components/LoginDrawer";
import { fetchProfile } from "../../redux/profileSlice";
import { RootState } from "../../store";

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

  const { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchProfile());
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Slider data={data} />
      </View>
      {!token && <LoginDrawer />}
    </View>
  );
};

export default Home;

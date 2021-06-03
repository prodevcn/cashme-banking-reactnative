import React from "react";
import { View } from "native-base";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Slider from "../../components/Slider";
import LoginDrawer from "../../components/LoginDrawer";
import { RootState } from "../../store";

import styles from "./styles";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigations";
import { HOME_SCREEN } from "../../constants";

type HomeRouteProp = RouteProp<RootStackParamList, typeof HOME_SCREEN>;

type Props = {
  route: HomeRouteProp;
};

const Home = ({ route }: Props) => {
  const { t } = useTranslation();
  const data = [
    {
      image: require("../../assets/images/products/cashme.png"),
      title: t("products.cash_me"),
      description: t("products.cash_me_description"),
      redirectScreenName: "",
    },
    {
      image: require("../../assets/images/products/arpi-solar.png"),
      title: t("products.arpi_solar"),
      description: t("products.arpi_solar_description"),
      redirectScreenName: "",
    },
    {
      image: require("../../assets/images/products/pay-later.png"),
      title: t("products.pay_later"),
      description: t("products.pay_later_description"),
      redirectScreenName: "",
    },
  ];

  const { token } = useSelector((state: RootState) => state.auth);
  const redirectTo = route.params?.redirectTo;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Slider data={data} />
      </View>
      {!token && (
        <LoginDrawer initiallyOpened={!!redirectTo} redirectTo={redirectTo} />
      )}
    </View>
  );
};

export default Home;

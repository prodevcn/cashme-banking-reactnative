import React from "react";
import { TouchableOpacity, ImageBackground } from "react-native";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "native-base";

import { HOME_SCREEN, LOAN_OFFER } from "../../../../constants";
import { RootState } from "../../../../store";

import ArrowLeft from "../../../../assets/images/arrow-left.svg";
import customColor from "../../../../theme/customColor";

import styles from "./styles";

interface ProductHeaderProps {
  backgroundImage?: any;
  screenLogo?: any;
  description?: string;
}

const ProductHeader = (props: ProductHeaderProps) => {
  const { goBack } = useNavigation();
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const { token } = useSelector((state: RootState) => state.auth);
  const {
    backgroundImage = null,
    screenLogo = null,
    description = null,
  } = props;

  const handler = () => {
    if (token) {
      navigate(LOAN_OFFER);
    } else {
      navigate(HOME_SCREEN, { redirectTo: LOAN_OFFER });
    }
  };

  return (
    <View style={styles.main}>
      <ImageBackground source={backgroundImage} style={styles.headerBackground}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.backBtn}
          onPress={() => {
            goBack();
          }}
        >
          <ArrowLeft width={32} height={32} color={customColor.brandPrimary} />
        </TouchableOpacity>
        <View style={styles.logo}>{screenLogo}</View>
        <View style={styles.description}>
          <Text>{description}</Text>
        </View>
        <View>
          <Button rounded primary style={styles.button}>
            <Text style={styles.upper} onPress={handler}>
              {t("single_product.get_it_now")}
            </Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProductHeader;

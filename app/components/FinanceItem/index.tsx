import React from "react";
import { ViewStyle, Image } from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { Button, View, Text } from "native-base";

import styles from "./styles";

interface IFinanceItemProps {
  style?: ViewStyle;
  title: string;
  description: string;
  image: any;
  screen: string;
}

const FinanceItem = ({
  style,
  title,
  description,
  image,
  screen,
}: IFinanceItemProps) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  return (
    <View style={[styles.cardShadow, style]}>
      <View style={styles.cardContainer}>
        <View style={styles.content}>
          <View style={styles.leftContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button
              rounded
              bordered
              style={styles.button}
              onPress={() => navigate(screen)}
            >
              <Text> {t("learn_more").toUpperCase()}</Text>
            </Button>
          </View>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>{t("loan_term")}</Text>
            <Text style={styles.infoDescription}>
              1-36 {t("months").toLowerCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={[styles.infoItem, styles.middleInfoItem]}>
            <Text style={styles.infoTitle}>{t("loan_amount")}</Text>
            <Text style={styles.infoDescription}>
              50,000-1,400,000 {t("AMD")}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>{t("interest")}</Text>
            <Text style={styles.infoDescription}>
              1-16% {t("monthly").toLowerCase()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FinanceItem;

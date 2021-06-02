import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { View } from "native-base";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store/index";
import { getProducts } from "../../../redux/productSlice";
import { FINANCE_PRODUCTS } from "../../../constants/products";
import FinanceItem from "../../../components/FinanceItem";
import Screen from "../../../components/Screen";

import styles from "./styles";

const Finance = () => {
  const { t } = useTranslation();
  const { data, loading } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Screen
      isNonScrolling={false}
      hasHeader={true}
      isLoading={loading}
      title={t("category_item.finance")}
      titleStyle={styles.title}
      innerStyle={styles.container}
    >
      <View style={styles.itemsContainer}>
        {data?.map((id, index) => (
          <FinanceItem
            key={`finance_item_${index}`}
            title={FINANCE_PRODUCTS[id].title}
            description={FINANCE_PRODUCTS[id].description}
            image={FINANCE_PRODUCTS[id].image}
            style={styles.item}
            screen={FINANCE_PRODUCTS[id].screen}
          />
        ))}
      </View>
    </Screen>
  );
};

export default Finance;

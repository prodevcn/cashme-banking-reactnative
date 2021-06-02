import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { View } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { RootState } from "../../store/index";
import { getCategories } from "../../redux/categorySlice";
import { CATEGORIES } from "../../constants";
import Screen from "../../components/Screen/index";
import CategoryItem from "../../components/CategoryItem";

import styles from "./styles";

const Categories = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const { data, loading } = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Screen
      title={t("categories")}
      titleStyle={styles.title}
      isNonScrolling={false}
      isLoading={loading}
      hasHeader={true}
      hasTabbar={true}
      hasBackIcon={false}
      hasLogo={true}
    >
      <View style={styles.list}>
        {data?.map(item => (
          <CategoryItem
            key={`${CATEGORIES[item.slug].title}_${item.id}`}
            title={CATEGORIES[item.slug].title}
            Background={CATEGORIES[item.slug].Background}
            Icon={CATEGORIES[item.slug].Icon}
            style={styles.item}
            onPress={() => navigate(CATEGORIES[item.slug].screen)}
          />
        ))}
      </View>
    </Screen>
  );
};

export default Categories;

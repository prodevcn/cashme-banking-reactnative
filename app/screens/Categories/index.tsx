import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { View, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";
import CategoryItem from "../../components/CategoryItem";
import Logo from "../../components/Logo";

import styles from "./styles";
import { getCategories } from "../../redux/categorySlice";
import { CATEGORIES } from "../../constants";
import Screen from "../../components/Screen/index";

const Categories = () => {
  const { t } = useTranslation();
  const { data, loading } = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Screen
      title={<Logo type={"dark"} />}
      isNonScrolling={false}
      isLoading={loading}
    >
      <Text style={styles.title}>{t("categories")}</Text>
      <View style={styles.list}>
        {data?.map(id => (
          <CategoryItem
            key={`${CATEGORIES[id].title}_${id}`}
            title={CATEGORIES[id].title}
            Background={CATEGORIES[id].Background}
            Icon={CATEGORIES[id].Icon}
            style={styles.item}
          />
        ))}
      </View>
    </Screen>
  );
};

export default Categories;

import React from "react";
import { Button, View, Text } from "native-base";
import { useTranslation } from "react-i18next";

import Screen from "../../../components/Screen";
import ProductHeader from "./ProductHeader";
import LoanDetail from "./LoanDetail";
import ListItem from "./ListItem";
import QuestionListItem from "./QuestionListItem";
import WorkFlowDiagram from "./WorkFlowDiagram";
import { FAQ } from "../../../constants/faq";

import CashMeLogo from "../../../assets/images/products/finance/cashme/cashme.svg";
import HomeRenovation from "../../../assets/images/products/finance/cashme/home_renovation.svg";
import TravelLoan from "../../../assets/images/products/finance/cashme/travel_loan.svg";
import MedicalLoan from "../../../assets/images/products/finance/cashme/medical_loan.svg";

import styles from "./styles";

const CashMe = () => {
  const { t } = useTranslation();

  return (
    <Screen
      isNonScrolling={false}
      isLoading={false}
      innerStyle={styles.screenContainer}
      hasTabbar={false}
    >
      <View>
        <ProductHeader
          backgroundImage={require("../../../assets/images/products/finance/cashme/cashme.png")}
          screenLogo={<CashMeLogo />}
          description={t("products.cash_me_description")}
        />
        <LoanDetail />
        <View style={styles.container}>
          <Text style={styles.title}>
            {t("single_product.loan_purpose_title")}
          </Text>
          <ListItem
            image={<TravelLoan width={40} height={40} />}
            subject={t("single_product.service_types.travel_loan.title")}
            description={t(
              "single_product.service_types.travel_loan.description",
            )}
          />
          <ListItem
            image={<MedicalLoan width={40} height={40} />}
            subject={t("single_product.service_types.medical_loan.title")}
            description={t(
              "single_product.service_types.medical_loan.description",
            )}
          />
          <ListItem
            image={<HomeRenovation width={40} height={40} />}
            subject={t("single_product.service_types.home_renovation.title")}
            description={t(
              "single_product.service_types.home_renovation.description",
            )}
          />
          <Text style={[styles.title, { marginVertical: 20 }]}>
            {t("single_product.loan_process_title")}
          </Text>
          <View style={styles.workFlow}>
            <WorkFlowDiagram />
          </View>
          <Button full rounded style={styles.button}>
            <Text>{t("single_product.get_it_now")}</Text>
          </Button>
          <Text style={[styles.title, styles.verticalMargin]}>
            {t("single_product.FAQ")}
          </Text>
          <View style={styles.bottomSpace}>
            {FAQ.map((element, index) => (
              <QuestionListItem question={element} key={index} />
            ))}
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default CashMe;

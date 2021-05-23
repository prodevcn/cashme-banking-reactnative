import React from "react";
import { View, Text } from "native-base";
import { useTranslation } from "react-i18next";
import { Image } from "react-native";

import Diagram from "../../../../assets/images/products/finance/cashme/application_process.svg";
import styles from "./styles";

interface StepNodeProps {
  image?: any;
  stepTitle?: string;
  title?: string;
  caption?: string;
  reverse?: boolean;
  index?: number;
}

const StepNode = (stepProps: StepNodeProps) => {
  const {
    image = null,
    stepTitle = null,
    title = null,
    caption = null,
    reverse = null,
    index = 1,
  } = stepProps;

  return (
    <View style={[styles.nodeMain, { top: (837 * index) / 4 - 50 }]}>
      {reverse ? (
        <View style={[styles.node, { right: -20 }]}>
          <View style={styles.rightSorted}>
            <Text style={styles.stepTitle}>{stepTitle}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.caption}>{caption}</Text>
          </View>
          <View>{image}</View>
        </View>
      ) : (
        <View style={[styles.node, { left: -20 }]}>
          <View>{image}</View>
          <View style={styles.leftSorted}>
            <Text style={styles.stepTitle}>{stepTitle}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.caption}>{caption}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const WorkFlowDiagram = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.main}>
      <Diagram />
      <StepNode
        image={
          <Image
            source={require("../../../../assets/images/products/finance/cashme/personal_detail.png")}
          />
        }
        stepTitle={t("single_product.process.step1.stepTitle")}
        title={t("single_product.process.step1.title")}
        caption={t("single_product.process.step1.caption")}
        reverse={false}
        index={0}
      />
      <StepNode
        image={
          <Image
            source={require("../../../../assets/images/products/finance/cashme/verification.png")}
          />
        }
        stepTitle={t("single_product.process.step2.stepTitle")}
        title={t("single_product.process.step2.title")}
        caption={t("single_product.process.step2.caption")}
        reverse={true}
        index={1}
      />
      <StepNode
        image={
          <Image
            source={require("../../../../assets/images/products/finance/cashme/loan_requirement.png")}
          />
        }
        stepTitle={t("single_product.process.step3.stepTitle")}
        title={t("single_product.process.step3.title")}
        caption={t("single_product.process.step3.caption")}
        reverse={false}
        index={2}
      />
      <StepNode
        image={
          <Image
            source={require("../../../../assets/images/products/finance/cashme/security.png")}
          />
        }
        stepTitle={t("single_product.process.step4.stepTitle")}
        title={t("single_product.process.step4.title")}
        caption={t("single_product.process.step4.caption")}
        reverse={true}
        index={3}
      />
      <Text style={styles.simpleText}>{t("single_product.simple")}</Text>
    </View>
  );
};

export default WorkFlowDiagram;

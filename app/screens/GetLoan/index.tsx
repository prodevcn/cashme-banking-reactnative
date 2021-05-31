import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Col, Row, Grid } from "react-native-easy-grid";
import Wizard from "react-native-wizard";

import Screen from "../../components/Screen";
import Proposals from "./Steps/Proposals";

import styles from "./styles";

const GetLoan = () => {
  const { t } = useTranslation();
  const { goBack } = useNavigation();
  const wizard = useRef<any>();
  const [currentStep, setCurrentStep] = useState(0);

  // TODO: All the views should be replaced with already ready components/screens
  const stepList = [
    {
      title: t("get_loan.loan_amount"),
      content: <Proposals />,
    },
    {
      title: t("get_loan.personal_info"),
      content: (
        <View
          style={{ width: "100%", height: 500, backgroundColor: "#e04851" }}
        />
      ),
    },
    {
      title: t("get_loan.loan_approval"),
      content: (
        <View
          style={{ width: "100%", height: 500, backgroundColor: "#9be07d" }}
        />
      ),
    },
    {
      title: t("get_loan.loan_approval"),
      content: (
        <View
          style={{ width: "100%", height: 500, backgroundColor: "#2634e0" }}
        />
      ),
    },
    {
      title: t("get_loan.loan_approval"),
      content: (
        <View
          style={{ width: "100%", height: 500, backgroundColor: "#2634e0" }}
        />
      ),
    },
  ];

  const progressWidth = () => {
    const stepPercent = 100 / stepList.length;
    return `${stepPercent * (currentStep + 1)}%`;
  };

  return (
    <Screen isNonScrolling={false} innerStyle={styles.container}>
      <Grid>
        <Row style={styles.header}>
          <Col style={[styles.headerLeftRight, styles.headerLeft]}>
            <Icon
              key="ArrowLeftIcon"
              type="AntDesign"
              name="arrowleft"
              style={styles.goBackIcon}
              onPress={() => goBack()}
            />
          </Col>
          <Col>
            <Text style={styles.headerBodyText}>
              {stepList[currentStep].title}
            </Text>
          </Col>
          <Col style={[styles.headerLeftRight, styles.headerRight]}>
            <Row style={styles.headerRightText}>
              <Text style={styles.pageNumber}>{currentStep + 1}</Text>
              <Text style={styles.pageCount}>/{stepList.length}</Text>
            </Row>
          </Col>
        </Row>

        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: progressWidth() }]} />
        </View>

        <Wizard
          ref={wizard}
          steps={stepList}
          currentStep={({ currentStep }) => {
            setCurrentStep(currentStep);
          }}
        />
      </Grid>
    </Screen>
  );
};

export default GetLoan;

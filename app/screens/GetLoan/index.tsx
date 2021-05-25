import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Icon } from "native-base";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Col, Row, Grid } from "react-native-easy-grid";
import Wizard from "react-native-wizard";

import Screen from "../../components/Screen";
import LoanAmount from "./Steps/LoanAmount";
import TransferOptions from "./Steps/TransferOptions";
import { PROPOSAL_LIST } from "../../constants/products";
import { GET_LOAN } from "../../constants";
import { RootStackParamList } from "../../navigations";

import styles from "./styles";

type GetLoanRouteProp = RouteProp<RootStackParamList, typeof GET_LOAN>;

type Props = {
  route: GetLoanRouteProp;
};

const GetLoan = ({ route }: Props) => {
  const { t } = useTranslation();
  const { goBack } = useNavigation();
  const wizard = useRef<any>();
  const [currentStep, setCurrentStep] = useState(0);
  const proposalIndex = route.params.proposalIndex;
  // TODO: All the views should be replaced with already ready components/screens
  const stepList = [
    {
      title: t("credit_steps.get_loan.loan_amount"),
      content: (
        <LoanAmount
          title={PROPOSAL_LIST[proposalIndex].title}
          description={PROPOSAL_LIST[proposalIndex].description}
          amount={PROPOSAL_LIST[proposalIndex].amount}
          color={PROPOSAL_LIST[proposalIndex].color}
          LoanIcon={PROPOSAL_LIST[proposalIndex].Icon}
        />
      ),
    },
    {
      title: t("credit_steps.get_loan.personal_info"),
      content: (
        <View
          style={{ width: "100%", height: 500, backgroundColor: "#e04851" }}
        />
      ),
    },
    {
      title: t("credit_steps.get_loan.loan_approval"),
      content: <TransferOptions />,
    },
    {
      title: t("credit_steps.get_loan.loan_approval"),
      content: (
        <View
          style={{ width: "100%", height: 500, backgroundColor: "#2634e0" }}
        />
      ),
    },
    {
      title: t("credit_steps.get_loan.loan_approval"),
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

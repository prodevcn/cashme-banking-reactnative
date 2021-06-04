import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "native-base";
import { Col, Row } from "react-native-easy-grid";
import { useSelector } from "react-redux";

import LoanOfferItem from "./LoanOfferItem";
import Avatar from "../../components/Avatar";
import HorizontalSummary from "../../components/HorizontalSummary";
import Screen from "../../components/Screen";
import { PROPOSAL_LIST, GET_LOAN } from "../../constants";
import { RootState } from "../../store";

import styles from "./styles";

const LoanOffer = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const { data } = useSelector((state: RootState) => state.loan);

  // TODO: Remove this test on API ready
  const { uri, firstName, lastName, passport, birthDate, SSN }: any = data || {
    uri: "https://insfocus.com/wp-content/uploads/2015/03/Uri-Profile-250x300.jpg",
    firstName: "Տիգրան",
    lastName: "Հարությունյան",
    passport: "AM0524477",
    birthDate: "15/06/1998",
    SSN: "1210025663",
  };

  const selectLoan = (index: number) => {
    navigate(GET_LOAN, { proposalIndex: index });
  };

  return (
    <Screen hasHeader isNonScrolling={false} innerStyle={styles.innerStyle}>
      <>
        <Row style={[styles.autoFill, styles.profileBlock]}>
          <Col style={[styles.autoFill, styles.profileBlockIcon]}>
            <Avatar name="Hayk" source={uri} />
          </Col>
          <Col>
            <Row style={styles.autoFill}>
              <Text
                style={styles.nameBlockText}
              >{`${firstName} ${lastName}`}</Text>
            </Row>
            <Row style={styles.autoFill}>
              <Col style={styles.autoFill}>
                <HorizontalSummary
                  items={[passport, birthDate, SSN]}
                  textStyle={styles.contentText}
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <View style={styles.container}>
          <Row style={styles.autoFill}>
            <Text style={styles.title}>{t("get_loan.available_amount")}</Text>
          </Row>

          {PROPOSAL_LIST.map((proposal, index) => (
            <Row key={`proposal_${index}`} style={styles.autoFill}>
              <LoanOfferItem
                title={proposal.title}
                description={proposal.description}
                amount={proposal.amount}
                color={proposal.color}
                Icon={proposal.Icon}
                style={styles.loanOffer}
                onPress={() => selectLoan(index)}
              />
            </Row>
          ))}
        </View>
      </>
    </Screen>
  );
};

export default LoanOffer;

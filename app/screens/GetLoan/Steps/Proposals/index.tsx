import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text } from "native-base";
import { Col, Row } from "react-native-easy-grid";
import { useSelector } from "react-redux";

import ProposalItem, {
  IProposalItemProps,
} from "../../../../components/ProposalItem";
import ProfileIcon from "../../../../components/ProfileIcon";
import { RootState } from "../../../../store/index";
import HomeLoanIcon from "../../../../assets/images/home-loan.svg";
import CarLoanIcon from "../../../../assets/images/car-loan.svg";
import ConsumerLoanIcon from "../../../../assets/images/consumer-loan.svg";

import styles from "./styles";

const Proposals = () => {
  const { t } = useTranslation();
  const { data } = useSelector((state: RootState) => state.loan);
  const proposals: Array<IProposalItemProps> = [
    {
      title: t("get_loan.consumer"),
      description: t("get_loan.proposal_description"),
      amount: 800000,
      color: "#FFB858",
      Icon: ConsumerLoanIcon,
    },
    {
      title: t("get_loan.car"),
      description: t("get_loan.proposal_description"),
      amount: 1300000,
      color: "#5B59D3",
      Icon: CarLoanIcon,
    },
    {
      title: t("get_loan.property"),
      description: t("get_loan.proposal_description"),
      amount: 14000000,
      color: "#49AA36",
      Icon: HomeLoanIcon,
    },
  ];

  // TODO: Remove this test on API ready
  const { uri, firstName, lastName, passport, birthDate, SSN }: any = data || {
    uri:
      "https://insfocus.com/wp-content/uploads/2015/03/Uri-Profile-250x300.jpg",
    firstName: "Տիգրան",
    lastName: "Հարությունյան",
    passport: "AM0524477",
    birthDate: "15/06/1998",
    SSN: "1210025663",
  };

  return (
    <View style={styles.container}>
      <Row style={[styles.autoFill, styles.profileBlock]}>
        <Col style={[styles.autoFill, styles.profileBlockIcon]}>
          <ProfileIcon uri={uri} style={styles.profileIcon} />
        </Col>
        <Col>
          <Row style={styles.autoFill}>
            <Text
              style={styles.nameBlockText}
            >{`${firstName} ${lastName}`}</Text>
          </Row>
          <Row style={styles.autoFill}>
            <Col style={styles.autoFill}>
              <Text style={styles.contentText}>{passport}</Text>
            </Col>
            <View style={styles.contentDivider} />
            <Col style={styles.autoFill}>
              <Text style={styles.contentText}>{birthDate}</Text>
            </Col>
            <View style={styles.contentDivider} />
            <Col style={styles.autoFill}>
              <Text style={styles.contentText}>{SSN}</Text>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={styles.autoFill}>
        <Text style={styles.title}>{t("get_loan.available_amount")}</Text>
      </Row>

      {proposals?.map((proposal, index) => (
        <Row style={styles.autoFill}>
          <ProposalItem
            key={`proposal_${index}`}
            title={proposal.title}
            description={proposal.description}
            amount={proposal.amount}
            color={proposal.color}
            Icon={proposal.Icon}
            style={styles.proposal}
          />
        </Row>
      ))}
    </View>
  );
};

export default Proposals;

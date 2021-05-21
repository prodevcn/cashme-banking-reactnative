import React from "react";
import { ViewStyle } from "react-native";
import { useTranslation } from "react-i18next";
import { Button, Text } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import Currency from "../Currency";

import styles from "./styles";

export interface IProposalItemProps {
  style?: ViewStyle;
  title: string;
  description: string;
  amount: number | string;
  color: string;
  Icon: any;
}

const ProposalItem = ({
  style,
  title,
  description,
  amount,
  color,
  Icon,
}: IProposalItemProps) => {
  const { t } = useTranslation();

  return (
    <Grid style={[styles.cardShadow, style]}>
      <Row style={styles.cardContainer}>
        <Col>
          <Text style={[styles.title, { color }]}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Currency amount={amount} style={styles.amount} />
        </Col>
        <Col style={styles.rightSide}>
          <Icon style={[styles.icon, { color }]} />
          <Button rounded style={styles.button}>
            <Text style={styles.buttonText}>{t("get_loan.apply_now")}</Text>
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default ProposalItem;

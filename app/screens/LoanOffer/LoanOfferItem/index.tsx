import React from "react";
import { ViewStyle } from "react-native";
import { useTranslation } from "react-i18next";
import { Button, Text, Col, Row, Grid } from "native-base";

import Currency from "../../../components/Currency";

import styles from "./styles";

export interface ILoanOfferItemProps {
  style?: ViewStyle;
  title: string;
  description: string;
  amount: number;
  color: string;
  Icon: any;
  onPress?(): void;
}

const LoanOfferItem = ({
  style,
  title,
  description,
  amount,
  color,
  Icon,
  onPress,
}: ILoanOfferItemProps) => {
  const { t } = useTranslation();

  return (
    <Grid style={[styles.cardShadow, style]}>
      <Row style={styles.cardContainer}>
        <Col>
          <Text style={[styles.title, { color }]}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Currency amount={amount} style={styles.amount} precision={0} />
        </Col>
        <Col style={styles.rightSide}>
          <Icon style={styles.icon} fill={color} />
          <Button rounded style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>
              {t("credit_steps.get_loan.apply_now")}
            </Text>
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default LoanOfferItem;

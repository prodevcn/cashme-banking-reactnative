import React from "react";
import { useTranslation } from "react-i18next";
import { ViewStyle } from "react-native";
import { Text } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import Currency from "../../../../../components/Currency";

import styles from "./styles";

interface ILoanTermsProps {
  style?: ViewStyle;
  loanAmount: number;
  actualInterestRate: number | string;
  nominalInterestRate: number | string;
  loanTerm: number | string;
  monthlyPayment: number;
  lastMonthPayment: number;
  amountToBePaid: number;
  upcomingPaymentDay: string;
}

const LoanTerms = ({
  style,
  loanAmount,
  actualInterestRate,
  nominalInterestRate,
  loanTerm,
  monthlyPayment,
  lastMonthPayment,
  amountToBePaid,
  upcomingPaymentDay,
}: ILoanTermsProps) => {
  const { t } = useTranslation();
  const terms = [
    {
      label: t("credit_steps.loan_amount_step.loan_amount"),
      component: (
        <Currency
          style={{ ...styles.value, ...styles.loanAmount }}
          amount={loanAmount}
        />
      ),
    },
    {
      label: t("credit_steps.loan_amount_step.actual_interest_rate"),
      component: <Text style={styles.value}>{actualInterestRate}%</Text>,
    },
    {
      label: t("credit_steps.loan_amount_step.nominal_interest_rate"),
      component: <Text style={styles.value}>{nominalInterestRate}%</Text>,
    },
    {
      label: t("credit_steps.loan_amount_step.loan_term"),
      component: (
        <Text style={styles.value}>
          {loanTerm + t("credit_steps.loan_amount_step.months")}
        </Text>
      ),
    },
    {
      label: t("credit_steps.loan_amount_step.monthly_payment"),
      component: <Currency style={styles.value} amount={monthlyPayment} />,
    },
    {
      label: t("credit_steps.loan_amount_step.last_month_payment"),
      component: (
        <Currency
          style={styles.value}
          amount={lastMonthPayment}
          precision={2}
        />
      ),
    },
    {
      label: t("credit_steps.loan_amount_step.amount_to_be_paid"),
      component: (
        <Currency style={styles.value} amount={amountToBePaid} precision={2} />
      ),
    },
    {
      label: t("credit_steps.loan_amount_step.upcoming_payment_day"),
      component: <Text style={styles.value}>{upcomingPaymentDay}</Text>,
    },
  ];

  return (
    <Grid style={[styles.container, style]}>
      {terms?.map((term, i) => (
        <Row key={`term_${i}`} style={styles.autoFill}>
          <Col>
            <Text style={styles.label}>{term.label}</Text>
          </Col>
          <Col style={styles.autoFill}>{term.component}</Col>
        </Row>
      ))}
    </Grid>
  );
};

export default LoanTerms;

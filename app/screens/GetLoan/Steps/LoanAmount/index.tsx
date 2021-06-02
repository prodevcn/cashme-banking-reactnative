import React, { useState } from "react";
import { Button, Text } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { useTranslation } from "react-i18next";

import CalculationSlider from "./CalculationSlider";
import LoanTerms from "./LoanTerms";
import Currency from "../../../../components/Currency";
import Dropdown from "../../../../components/Dropdown";
import ConfirmLoanRate from "../../../../components/ConfirmLoanRate";

import customColor from "../../../../theme/customColor";
import styles from "./styles";

interface ILoanAmount {
  title: string;
  description: string;
  amount: number;
  color: string;
  LoanIcon: any;
}

const LoanAmount = ({
  title,
  description,
  amount,
  color,
  LoanIcon,
}: ILoanAmount) => {
  const { t } = useTranslation();
  const [monthlyPayableSize, setMonthlyPayableSize] = useState(8000);
  const [inputText, setInputText] = useState("");

  return (
    <Grid style={styles.container}>
      <Row style={styles.autoFill}>
        <Col style={styles.leftSide}>
          <LoanIcon
            style={styles.icon}
            fill={customColor.gray}
            width={60}
            height={60}
          />
        </Col>
        <Col>
          <Text style={[styles.title, { color }]}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Currency amount={amount} style={styles.amount} />
        </Col>
      </Row>

      <Row style={styles.autoFill}>
        {/*TODO: Should be changed on API ready */}
        <Dropdown
          onChange={(item: any) => console.log(item)}
          label="some label"
          options={[{ text: "some text 2", value: "value2" }]}
          style={styles.dropdown}
        />
      </Row>

      <Row style={styles.autoFill}>
        <CalculationSlider
          value={monthlyPayableSize}
          minimumValue={4000}
          maximumValue={12000}
          step={1000}
          maxDuration={24}
          onValueChange={(value: number) => {
            setMonthlyPayableSize(value);
          }}
        />
      </Row>

      <Row style={styles.autoFill}>
        <LoanTerms
          loanAmount={800000}
          actualInterestRate={97.96}
          nominalInterestRate={6}
          loanTerm={36}
          monthlyPayment={9000}
          lastMonthPayment={9166.5}
          amountToBePaid={250166.5}
          upcomingPaymentDay={"12/12/2021"}
          style={styles.loanTerm}
        />
      </Row>

      <ConfirmLoanRate
        rate={97.56}
        value={inputText}
        onChangeText={text => {
          setInputText(text);
        }}
      />

      <Row style={[styles.autoFill]}>
        <Col>
          <Button
            rounded
            style={styles.confirmBtn}
            disabled={!("97.56" == inputText)}
          >
            <Text style={styles.confirmBtnText}>
              {t("credit_steps.loan_amount_step.confirm")}
            </Text>
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default LoanAmount;

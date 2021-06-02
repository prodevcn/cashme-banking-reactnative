import React from "react";
import { useTranslation } from "react-i18next";
import { ViewStyle } from "react-native";
import { View, Text } from "native-base";
import Slider from "react-native-slider";

import Currency from "../../../../../components/Currency";

import customColor from "../../../../../theme/customColor";
import styles from "./styles";

interface ILoanCalculator {
  style?: ViewStyle;
  value: number;
  minimumValue: number;
  maximumValue: number;
  step: number;
  maxDuration: number;
  onValueChange(value: number): void;
}

const CalculationSlider = ({
  style,
  value,
  minimumValue,
  maximumValue,
  step,
  maxDuration,
  onValueChange,
}: ILoanCalculator) => {
  const { t } = useTranslation();

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.monthlyPayableSizeExplanation}>
        {t("credit_steps.loan_amount_step.preferred_amount")}
      </Text>
      <Currency amount={value} style={styles.monthlyPayableSize} />
      <Slider
        value={value}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        minimumTrackTintColor={customColor.green}
        maximumTrackTintColor={customColor.lightGray}
        thumbTintColor={customColor.white}
        thumbTouchSize={{ width: 24, height: 24 }}
        trackStyle={styles.trackStyle}
        thumbStyle={styles.thumbStyle}
        style={styles.sliderStyle}
        onValueChange={onValueChange}
      />
      <Text style={styles.duration}>
        {maxDuration + t("credit_steps.loan_amount_step.months")}
      </Text>
      <Text style={styles.durationSubText}>
        {t("credit_steps.loan_amount_step.loan_term")}
      </Text>
    </View>
  );
};

export default CalculationSlider;

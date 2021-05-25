import React, { useCallback, useMemo, useRef, useState } from "react";
import { Form, Input, Item, Text, View } from "native-base";
import { useTranslation, Trans } from "react-i18next";
import { ViewStyle } from "react-native";
import { Col, Row } from "react-native-easy-grid";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";

import { randomId } from "../../helpers/string";

import CheckMarkIcon from "../../assets/images/checkMark.svg";
import PercentageIcon from "../../assets/images/percentage.svg";
import styles from "./styles";
import customColor from "../../theme/customColor";

interface IConfirmLoanRate {
  style?: ViewStyle;
  value: string;
  rate: number | string;
  onChangeText?(text: string): void;
}

const ConfirmLoanRate = ({
  style,
  value = "",
  rate = 0,
  onChangeText,
}: IConfirmLoanRate) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [opened, setOpened] = useState(false);
  const { t } = useTranslation();

  const snapPoints = useMemo(() => ["0%", "50%"], []);

  const key = useMemo(() => randomId(5), []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        enableTouchThrough={false}
        pressBehavior="collapse"
        appearsOnIndex={1}
        disappearsOnIndex={0}
      />
    ),
    [],
  );

  const ModalBackground = () => (
    <View style={styles.backgroundContainer}></View>
  );

  const openDropdown = () => {
    setOpened(true);

    bottomSheetRef.current?.present();
    bottomSheetRef.current?.expand();
  };

  const closeDropdown = () => {
    setOpened(false);
    bottomSheetRef.current?.dismiss();
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.realizeYearlyRate, style]}
        activeOpacity={0.8}
        onPress={openDropdown}
      >
        <Row style={[styles.autoFill]}>
          <Col style={[styles.autoFill, styles.realizeYearlyRatePrefix]}>
            <PercentageIcon />
          </Col>
          <Col>
            <Text style={styles.realizeYearlyRateText}>
              {t("credit_steps.loan_amount_step.realize_annual_rate")}
            </Text>
            <Text style={styles.asterisk}>*</Text>
          </Col>
          <Col style={[styles.autoFill, styles.realizeYearlyRatePostfix]}>
            <CheckMarkIcon
              fill={rate == value ? customColor.green : "#c7d7e6"}
            />
          </Col>
        </Row>
      </TouchableOpacity>

      <BottomSheetModal
        ref={bottomSheetRef}
        key={key}
        name={key}
        index={opened ? 1 : 0}
        snapPoints={snapPoints}
        dismissOnPanDown={false}
        handleComponent={null}
        backdropComponent={renderBackdrop}
        backgroundComponent={ModalBackground}
        enableContentPanningGesture={false}
        enableHandlePanningGesture={false}
        onAnimate={(fromIndex, toIndex) => {
          if (toIndex === 0) {
            closeDropdown();
          }
        }}
        animationDuration={500}
        style={styles.dropdownSheet}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.title}>
            {t("credit_steps.loan_amount_step.realize_annual_rate")}
          </Text>

          <View style={styles.formContainer}>
            <Form style={{ flex: 1 }}>
              <Item regular style={styles.formItem}>
                <Input
                  value={value}
                  keyboardType="number-pad"
                  onChangeText={onChangeText}
                />
              </Item>
            </Form>
            <Text style={styles.rate}>%</Text>
          </View>

          <Text style={styles.description}>
            <Trans
              defaults={`credit_steps.loan_amount_step.input_description`}
              values={{ rate: rate }}
              components={[
                <Text style={styles.descriptionHighlight}>text</Text>,
              ]}
            />
          </Text>
        </View>
      </BottomSheetModal>
    </>
  );
};

export default ConfirmLoanRate;

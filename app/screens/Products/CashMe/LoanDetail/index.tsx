import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Grid } from "react-native-easy-grid";
import { ScrollView, Animated } from "react-native";
import { Text, View, Button } from "native-base";

import LoadingBuffering from "../../../../components/LoadingBuffering";
import { getCashMeInfo } from "../../../../redux/cashMeSlice";
import { RootState } from "../../../../store";

import ArrowUp from "../../../../assets/images/chevron-up.svg";
import styles from "./styles";

const LoanDetail = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { loading, data } = useSelector((state: RootState) => state.cashMe);
  const [showDetail, setShowDetail] = useState(false);

  const extendInfoBox = () => {
    setShowDetail(true);
  };

  const formatValue = (value: any) => {
    if (!value) return "";
    const pattern = /(\d)(?=(\d\d\d)+(?!\d))/; // Separate variable every for 3 digits with comma
    return value.replace(pattern, "$1,");
  };

  useEffect(() => {
    dispatch(getCashMeInfo());

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View>
      <ScrollView
        style={styles.dropDownBox}
        showsVerticalScrollIndicator={false}
      >
        <Grid>
          <Row>
            <Col size={32} style={[styles.infoCol, styles.infoColRightBorder]}>
              <Text style={[styles.headerTitle, styles.mediumFont]}>
                {t("loan_term")}
              </Text>
              {loading ? (
                <LoadingBuffering size={12} />
              ) : (
                <Text style={styles.infoValue}>
                  {data?.details?.minMonths} - {data?.details?.maxMonths}{" "}
                  {t("months")}
                </Text>
              )}
            </Col>
            <Col size={36} style={[styles.infoCol, styles.infoColRightBorder]}>
              <Text style={[styles.headerTitle, styles.mediumFont]}>
                {t("loan_amount")}
              </Text>
              {loading ? (
                <LoadingBuffering size={12} />
              ) : (
                <View style={styles.amountSection}>
                  <Text style={styles.infoValue}>
                    {formatValue(data?.details?.minAmount)} -{" "}
                    {formatValue(data?.details?.maxAmount)} {t("AMD")}
                  </Text>
                </View>
              )}
            </Col>
            <Col size={32} style={styles.infoCol}>
              <Text style={[styles.headerTitle, styles.mediumFont]}>
                {t("interest")}
              </Text>
              {loading ? (
                <LoadingBuffering size={12} />
              ) : (
                <Text style={styles.infoValue}>1 - 16% {t("monthly")}</Text>
              )}
            </Col>
          </Row>
        </Grid>
        {!showDetail ? (
          <Button
            transparent
            style={styles.centerPosition}
            onPress={() => {
              extendInfoBox();
            }}
          >
            <Text style={styles.moreBtn}>{t("single_product.know_more")}</Text>
          </Button>
        ) : (
          <View style={styles.minimizedBox}>
            <Row style={styles.listItemRow}>
              <Col size={50}>
                <View style={styles.infoTitleSection}>
                  <Text style={styles.infoTitle}>
                    {t("single_product.service_detail.customer")}
                  </Text>
                </View>
              </Col>
              <Col size={50}>
                {loading ? (
                  <LoadingBuffering size={16} />
                ) : (
                  <Text style={[styles.infoTitle, styles.darkColored]}>
                    Armenia
                  </Text>
                )}
              </Col>
            </Row>
            <Row style={styles.listItemRow}>
              <Col size={50}>
                <View style={styles.infoTitleSection}>
                  <Text style={styles.infoTitle}>
                    {t("single_product.service_detail.customer_age")}
                  </Text>
                </View>
              </Col>
              <Col size={50}>
                {loading ? (
                  <LoadingBuffering size={16} />
                ) : (
                  <Text style={[styles.infoTitle, styles.darkColored]}>
                    21 - 65 (included)
                  </Text>
                )}
              </Col>
            </Row>
            <Row style={styles.listItemRow}>
              <Col size={50}>
                <View style={styles.infoTitleSection}>
                  <Text style={styles.infoTitle}>
                    {t("single_product.service_detail.loan_currency")}
                  </Text>
                </View>
              </Col>
              <Col size={50}>
                {loading ? (
                  <LoadingBuffering size={16} />
                ) : (
                  <Text style={[styles.infoTitle, styles.darkColored]}>
                    {t("AMD")}
                  </Text>
                )}
              </Col>
            </Row>
            <Row style={styles.listItemRow}>
              <Col size={50}>
                <View style={styles.infoTitleSection}>
                  <Text style={styles.infoTitle}>
                    {t("single_product.service_detail.lending_type")}
                  </Text>
                </View>
              </Col>
              <Col size={50}>
                {loading ? (
                  <LoadingBuffering size={16} />
                ) : (
                  <Text style={[styles.infoTitle, styles.darkColored]}>
                    cash / non cash
                  </Text>
                )}
              </Col>
            </Row>
            <Row style={styles.listItemRow}>
              <Col size={50}>
                <View style={styles.infoTitleSection}>
                  <Text style={styles.infoTitle}>
                    {t(
                      "single_product.service_detail.annual_factual_interest_rate",
                    )}
                  </Text>
                </View>
              </Col>
              <Col size={50}>
                {loading ? (
                  <LoadingBuffering size={16} />
                ) : (
                  <Text style={[styles.infoTitle, styles.darkColored]}>
                    {data?.details?.annualRate} % (depends on fico score)
                  </Text>
                )}
              </Col>
            </Row>
            <Row style={styles.listItemRow}>
              <Col size={50}>
                <View style={styles.infoTitleSection}>
                  <Text style={styles.infoTitle}>
                    {t("single_product.service_detail.loan_service_fee")}
                  </Text>
                </View>
              </Col>
              <Col size={50}>
                {loading ? (
                  <LoadingBuffering size={16} />
                ) : (
                  <Text style={[styles.infoTitle, styles.darkColored]}>
                    {data?.details?.serviceFeeRate}% of loan amount (depends on
                    fico score)
                  </Text>
                )}
              </Col>
            </Row>
            <Row style={styles.listItemRow}>
              <Col size={50}>
                <View style={styles.infoTitleSection}>
                  <Text style={styles.infoTitle}>
                    {t("single_product.service_detail.loan_payment")}
                  </Text>
                </View>
              </Col>
              <Col size={50}>
                {loading ? (
                  <LoadingBuffering size={16} />
                ) : (
                  <Text style={[styles.infoTitle, styles.darkColored]}>
                    anuity
                  </Text>
                )}
              </Col>
            </Row>
            <Row style={styles.listItemRow}>
              <Col size={50}>
                <View style={styles.infoTitleSection}>
                  <Text style={styles.infoTitle}>
                    {t("single_product.service_detail.application_review_fee")}
                  </Text>
                </View>
              </Col>
              <Col size={50}>
                {loading ? (
                  <LoadingBuffering size={16} />
                ) : (
                  <Text style={[styles.infoTitle, styles.darkColored]}>
                    not defined
                  </Text>
                )}
              </Col>
            </Row>
            <Row style={styles.listItemRow}>
              <Col size={50}>
                <View style={styles.infoTitleSection}>
                  <Text style={styles.infoTitle}>
                    {t("single_product.service_detail.cash_withdrawal_fee")}
                  </Text>
                </View>
              </Col>
              <Col size={50}>
                {loading ? (
                  <LoadingBuffering size={16} />
                ) : (
                  <Text style={[styles.infoTitle, styles.darkColored]}>
                    not applicable
                  </Text>
                )}
              </Col>
            </Row>
            <Row style={styles.listItemRow}>
              <Col size={50}>
                <View style={styles.infoTitleSection}>
                  <Text style={styles.infoTitle}>
                    {t("single_product.service_detail.fines_penalties")}
                  </Text>
                </View>
              </Col>
              <Col size={50}>
                {loading ? (
                  <LoadingBuffering size={16} />
                ) : (
                  <Text style={[styles.infoTitle, styles.darkColored]}>
                    overdue amount penalty {data?.details?.penaltyBaseAmount}%
                    daily overdue interest penalty
                    {data?.details?.penaltyPercentageAmount}% daily
                  </Text>
                )}
              </Col>
            </Row>
            <Row style={styles.listItemRow}>
              <Col size={50}>
                <View style={styles.infoTitleSection}>
                  <Text style={styles.infoTitle}>
                    {t("single_product.service_detail.loan_decision_making")}
                  </Text>
                </View>
              </Col>
              <Col size={50}>
                {loading ? (
                  <LoadingBuffering size={16} />
                ) : (
                  <Text style={[styles.infoTitle, styles.darkColored]}>
                    in a minute
                  </Text>
                )}
              </Col>
            </Row>
            <Row style={styles.listItemRow}>
              <Col size={50}>
                <View style={styles.infoTitleSection}>
                  <Text style={styles.infoTitle}>
                    {t("single_product.service_detail.required_document")}
                  </Text>
                </View>
              </Col>
              <Col size={50}>
                {loading ? (
                  <LoadingBuffering size={16} />
                ) : (
                  <Text style={[styles.infoTitle, styles.darkColored]}>
                    passport social card
                  </Text>
                )}
              </Col>
            </Row>
            <Button
              transparent
              style={styles.centerPosition}
              onPress={() => {
                setShowDetail(false);
              }}
            >
              <ArrowUp width={20} height={20} style={styles.primaryColor} />
            </Button>
          </View>
        )}
      </ScrollView>
    </Animated.View>
  );
};

export default LoanDetail;

import React from "react";
import { Col, Row, Text, View, Icon, Button } from "native-base";
import { useTranslation } from "react-i18next";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { OFFICE_LOCATIONS } from "../../../../../constants";
import MapIcon from "../../../../../assets/images/map.svg";
import styles from "./styles";

const Cash = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const region: Region = {
    latitude: 40.195341954089585,
    latitudeDelta: 0.4190311305971264,
    longitude: 44.522839207202196,
    longitudeDelta: 0.4512323811650276,
  };

  return (
    <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={region} />

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.locationsBtn}
        onPress={() => {
          navigate(OFFICE_LOCATIONS);
        }}
      >
        <Row style={styles.autoFill}>
          <Col
            style={[styles.autoFill, styles.center, styles.mapIconContainer]}
          >
            <MapIcon />
          </Col>
          <Col style={[styles.center]}>
            <Text style={styles.locationsBtnText}>
              {t("credit_steps.transfer_options.offices_to_get_money")}
            </Text>
          </Col>
          <Col
            style={[styles.autoFill, styles.center, styles.arrowIconContainer]}
          >
            <Icon
              type="Feather"
              name="chevron-right"
              style={styles.arrowIcon}
            />
          </Col>
        </Row>
      </TouchableOpacity>

      <Button rounded style={[styles.confirmBtn, styles.center]}>
        <Text style={styles.confirmBtnText}>
          {t("credit_steps.transfer_options.confirm")}
        </Text>
      </Button>
    </View>
  );
};

export default Cash;

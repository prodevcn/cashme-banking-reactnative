import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Text, List, ListItem, Row, Col } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { RootState } from "../../store/index";
import Screen from "../../components/Screen/index";
import { OFFICE_TIME_FORMAT, WORK_TIME_FORMAT } from "../../constants";
import {
  getCashOffices,
  IOffice,
  IOfficeSchedule,
} from "../../redux/cashOffice/index";

import LocationPickerIcon from "../../assets/images/location-picker.svg";
import styles from "./styles";

const OfficeLocations = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state: RootState) => state.cashOffice);

  useEffect(() => {
    dispatch(getCashOffices());
  }, []);

  const getGroupedOffices = (officesData?: IOffice[]) => {
    return officesData?.map(office => {
      const schedule = getSchedule(office.cashOfficeSchedules);
      const isOfficeOpen = isOpen(schedule);

      return {
        schedule:
          !isWeekend(schedule) &&
          moment(schedule?.openTime, OFFICE_TIME_FORMAT).format(
            WORK_TIME_FORMAT,
          ) +
            " - " +
            moment(schedule?.closeTime, OFFICE_TIME_FORMAT).format(
              WORK_TIME_FORMAT,
            ),
        item: office,
        isOpen: isOfficeOpen,
      };
    });
  };

  const getSchedule = (schedules: Array<IOfficeSchedule>) => {
    return schedules.find(
      schedule => schedule.weekDay === moment().day().toString(),
    );
  };

  const isOpen = (schedule?: IOfficeSchedule) => {
    return (
      !isWeekend(schedule) &&
      moment().isBetween(
        moment(schedule?.openTime, OFFICE_TIME_FORMAT),
        moment(schedule?.closeTime, OFFICE_TIME_FORMAT),
      )
    );
  };

  const isWeekend = (schedule?: IOfficeSchedule) => {
    return !schedule?.openTime || !schedule?.closeTime;
  };

  const groupedOffices = getGroupedOffices(data);

  return (
    <Screen
      title={t("credit_steps.office_locations.title")}
      titleStyle={styles.title}
      isLoading={loading}
      hasHeader={true}
      hasBackIcon={true}
      innerStyle={styles.container}
    >
      <List>
        {groupedOffices?.map((office, i) => (
          <ListItem key={`office_${i}`} style={styles.listItem}>
            <Row>
              <Col style={styles.icon}>
                <LocationPickerIcon />
              </Col>
              <Col>
                <Text style={styles.textDefault}>{office.item.address}</Text>
                <Text style={styles.textDefault}>
                  {t("credit_steps.office_locations.working_hours")} (
                  {office.schedule})
                </Text>
                <Text
                  style={[
                    styles.textDefault,
                    office.isOpen ? styles.open : styles.closed,
                  ]}
                >
                  (
                  {office.isOpen
                    ? t("credit_steps.office_locations.open")
                    : t("credit_steps.office_locations.closed")}
                  )
                </Text>
              </Col>
            </Row>
          </ListItem>
        ))}
      </List>
    </Screen>
  );
};

export default OfficeLocations;

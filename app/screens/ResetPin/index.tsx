import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { Asserts } from "yup";
import { Form, View, Text, Button } from "native-base";
import Screen from "../../components/Screen";
import Validation from "../../components/Validation";
import PasswordInput from "../../components/PasswordInput";
import resetPinSchema from "../../validation/schemas/resetPinSchema";
import { RootState } from "../../store";
import * as auth from "../../helpers/auth";
import { enrollPin } from "../../redux/authSlice";

import PinIcon from "../../assets/images/pin.svg";

import styles from "./styles";
import customColor from "../../theme/customColor";

interface PinFormValues extends Asserts<typeof resetPinSchema> {}

const ResetPin = (props: any) => {
  const { t } = useTranslation();
  const { loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = async (values: any) => {
    const username = await auth.getUsername();

    await dispatch(enrollPin(username, values.password, values.pin));

    auth.enablePin(values.pin);

    navigation.goBack();
  };

  const initialValues: PinFormValues = {
    password: "",
    pin: "",
    confirmPin: "",
  };

  return (
    <Screen title={t("reset_pin.title")} isLoading={loading}>
      <View style={styles.container}>
        <View style={styles.pinIcon}>
          <PinIcon
            width="46"
            height="47"
            fill={customColor.black}
            stroke={customColor.black}
          />
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={resetPinSchema}
          onSubmit={handleSubmit}
          component={props => {
            const { values, handleChange, handleBlur, handleSubmit } = props;

            return (
              <Form>
                <Validation formik={props} name="password" showMessage={true}>
                  <PasswordInput
                    label={t("reset_pin.password")}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                </Validation>
                <Validation formik={props} name="pin" showMessage={true}>
                  <PasswordInput
                    label={t("reset_pin.pin")}
                    value={values.pin}
                    onChangeText={handleChange("pin")}
                    onBlur={handleBlur("pin")}
                  />
                </Validation>
                <Validation formik={props} name="confirmPin" showMessage={true}>
                  <PasswordInput
                    label={t("reset_pin.confirm_pin")}
                    value={values.confirmPin}
                    onChangeText={handleChange("confirmPin")}
                    onBlur={handleBlur("confirmPin")}
                  />
                </Validation>

                <Button
                  style={styles.submitButton}
                  full
                  rounded
                  onPress={handleSubmit}
                >
                  <Text>{t("reset_pin.confirm")}</Text>
                </Button>
              </Form>
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default ResetPin;

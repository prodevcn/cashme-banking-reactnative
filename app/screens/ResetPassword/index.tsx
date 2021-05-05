import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { View, Text, Form, Button, Toast } from "native-base";
import { Dimensions } from "react-native";
import { Formik } from "formik";
import { Asserts } from "yup";
import { useNavigation } from "@react-navigation/native";
import { BoxPasswordStrengthDisplay } from "react-native-password-strength-meter";
import resetPasswordSchema from "../../validation/schemas/resetPasswordSchema";
import Validation from "../../components/Validation";
import PasswordInput from "../../components/PasswordInput";
import Screen from "../../components/Screen";
import { resetPassword } from "../../redux/forgotPasswordSlice";
import { RootState } from "../../store";
import { HOME_SCREEN, PASSWORD_STRENGTH_LEVELS } from "../../constants";

import styles from "./styles";

interface ResetPasswordFormValues extends Asserts<typeof resetPasswordSchema> {}

const ResetPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.forgotPassword,
  );

  const handleSubmit = async (values: any) => {
    try {
      const username = data?.username || "";

      await dispatch(resetPassword({ username, ...values }));

      navigate(HOME_SCREEN);
    } catch (e) {
      Toast.show({
        text: error,
        type: "danger",
        duration: 5000,
      });
    }
  };

  const initialValues: ResetPasswordFormValues = {
    password: "",
    passwordConfirmation: "",
  };

  const deviceWidth = Dimensions.get("window").width;

  return (
    <Screen isLoading={loading} title={t("reset_password.title")}>
      <View style={styles.content}>
        <Formik
          initialValues={initialValues}
          validationSchema={resetPasswordSchema}
          onSubmit={handleSubmit}
          component={props => {
            const { values, handleChange, handleBlur, handleSubmit } = props;

            return (
              <Form>
                <View>
                  <Validation formik={props} name="password" showMessage={true}>
                    <PasswordInput
                      label={t("reset_password.password")}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                    />
                  </Validation>
                  <View>
                    <BoxPasswordStrengthDisplay
                      levels={PASSWORD_STRENGTH_LEVELS}
                      width={deviceWidth - 50}
                      password={values.password}
                      minLength={1}
                      wrapperStyle={styles.strengthBox}
                    />
                  </View>
                  <Validation
                    formik={props}
                    name="passwordConfirmation"
                    showMessage={true}
                  >
                    <PasswordInput
                      label={t("reset_password.confirm_password")}
                      value={values.passwordConfirmation}
                      onChangeText={handleChange("passwordConfirmation")}
                      onBlur={handleBlur("passwordConfirmation")}
                    />
                  </Validation>
                </View>
                <Button
                  full
                  rounded
                  style={styles.button}
                  onPress={handleSubmit}
                >
                  <Text>{t("reset_password.continue")}</Text>
                </Button>
              </Form>
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default ResetPassword;

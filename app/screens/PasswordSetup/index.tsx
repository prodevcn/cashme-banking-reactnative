import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { View, Text, Form, Button, Toast } from "native-base";
import { Dimensions } from "react-native";
import { Formik } from "formik";
import { Asserts } from "yup";
import { useNavigation } from "@react-navigation/native";
import { BoxPasswordStrengthDisplay } from "react-native-password-strength-meter";
import passwordSetupSchema from "../../validation/schemas/passwordSetupSchema";
import Validation from "../../components/Validation";
import PasswordInput from "../../components/PasswordInput";
import Screen from "../../components/Screen";
import { setPassword } from "../../redux/signUpSlice";
import { RootState } from "../../store";
import {
  SECURITY_QUESTION_SETUP,
  PASSWORD_STRENGTH_LEVELS,
} from "../../constants";
import { hasNumber, hasLetter } from "../../validation";
import CheckMark from "../../assets/images/check-mark.svg";
import customColor from "../../theme/customColor";

import styles from "./styles";

interface PasswordFormValues extends Asserts<typeof passwordSetupSchema> {}

const PasswordSetup = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { loading, error } = useSelector((state: RootState) => state.signUp);

  const handleSubmit = async (values: any) => {
    try {
      await dispatch(setPassword(values));

      navigate(SECURITY_QUESTION_SETUP);
    } catch (error) {
      Toast.show({
        text: error,
        type: "danger",
        duration: 5000,
      });
    }
  };

  const initialValues: PasswordFormValues = {
    password: "",
    passwordConfirmation: "",
  };

  const deviceWidth = Dimensions.get("window").width;

  return (
    <Screen
      isLoading={loading}
      title={t("security_settings.title")}
      titleStyle={styles.title}
    >
      <View style={styles.content}>
        <Formik
          initialValues={initialValues}
          validationSchema={passwordSetupSchema}
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

                <View style={styles.requirements}>
                  <Text style={styles.requirementsTitle}>
                    {t("reset_password.password_criteria")}:
                  </Text>
                  <Text style={styles.requirementText}>
                    <CheckMark
                      fill={
                        values.password && values.password.length >= 8
                          ? customColor.dodgerBlue
                          : customColor.gray
                      }
                    />{" "}
                    {t("reset_password.contains_characters")}
                  </Text>
                  <Text style={styles.requirementText}>
                    <CheckMark
                      fill={
                        hasLetter(values.password)
                          ? customColor.dodgerBlue
                          : customColor.gray
                      }
                    />{" "}
                    {t("reset_password.contains_letters")}
                  </Text>
                  <Text style={styles.requirementText}>
                    <CheckMark
                      fill={
                        hasNumber(values.password)
                          ? customColor.dodgerBlue
                          : customColor.gray
                      }
                    />{" "}
                    {t("reset_password.contains_numbers")}
                  </Text>
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

export default PasswordSetup;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation, Trans } from "react-i18next";
import { View, Text, Form, Button, Label, Toast, Icon } from "native-base";
import { Formik } from "formik";
import { Asserts } from "yup";
import { useNavigation } from "@react-navigation/native";
import passwordRecoverCodeSchema from "../../validation/schemas/passwordRecoverCodeSchema";
import Validation from "../../components/Validation";
import Screen from "../../components/Screen";
import SmsCodeInput from "../../components/SmsCodeInput";
import {
  resendEmailVerificationCode,
  submitEmailVerificationCode,
} from "../../redux/signUpSlice";
import { RootState } from "../../store";
import {
  VERIFICATION_CODE_LENGTH,
  EMAIL_VERIFICATION_SUCCESS,
  HOME_SCREEN,
} from "../../constants";

import styles from "./styles";

interface CodeFormValues extends Asserts<typeof passwordRecoverCodeSchema> {}

const EmailVerification = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.signUp,
  );

  const handleSubmit = async (values: any) => {
    try {
      await dispatch(submitEmailVerificationCode(values));

      navigate(EMAIL_VERIFICATION_SUCCESS);
    } catch (error) {
      Toast.show({
        text: error,
        type: "danger",
        duration: 5000,
      });
    }
  };

  const handleChange = (text: string, setFieldValue: Function) => {
    setFieldValue("code", text);

    if (text.length === VERIFICATION_CODE_LENGTH) {
      handleSubmit({ code: text });
    }
  };

  const resendCode = () => {
    try {
      dispatch(resendEmailVerificationCode());
    } catch (error) {
      Toast.show({
        text: error,
        type: "danger",
        duration: 5000,
      });
    }
  };

  const initialValues: CodeFormValues = {
    code: "",
  };

  return (
    <Screen
      isLoading={loading}
      title={t("email_verification.title")}
      titleStyle={styles.title}
    >
      <View>
        <Text style={styles.contentInfo}>
          <Trans
            defaults={`email_verification.info`}
            values={{ email: data?.email }}
            components={[<Text style={styles.contentInfoUsername}>text</Text>]}
          />
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={passwordRecoverCodeSchema}
          onSubmit={handleSubmit}
          component={formik => {
            const { values, handleBlur, setFieldValue } = formik;

            return (
              <Form>
                <View style={styles.inputContainer}>
                  <Label style={styles.inputLabel}>
                    {t("email_verification.label")}
                  </Label>

                  <Validation formik={formik} name="code" showMessage={true}>
                    <SmsCodeInput
                      code={values.code}
                      length={VERIFICATION_CODE_LENGTH}
                      onChange={text => {
                        handleChange(text, setFieldValue);
                      }}
                      onBlur={handleBlur("code")}
                      onSubmit={handleSubmit}
                      shakeHandler={() =>
                        !!error &&
                        values.code?.length === VERIFICATION_CODE_LENGTH
                      }
                    ></SmsCodeInput>
                  </Validation>
                </View>
                <Button
                  full
                  transparent
                  disabled={data && !data?.sent}
                  style={styles.resendButton}
                  onPress={() => {
                    resendCode();
                    setFieldValue("code", "");
                  }}
                >
                  <Icon name="refresh" style={styles.resendButtonIcon} />
                  <Text>{t("email_verification.resend_code")}</Text>
                </Button>

                <Button
                  full
                  transparent
                  onPress={() => {
                    navigate(HOME_SCREEN);
                  }}
                >
                  <Text>{t("email_verification.cancel")}</Text>
                </Button>
              </Form>
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default EmailVerification;

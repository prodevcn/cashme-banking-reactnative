import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation, Trans } from "react-i18next";
import { View, Text, Form, Button, Label, Toast, Icon } from "native-base";
import { Formik } from "formik";
import { Asserts } from "yup";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useNavigation } from "@react-navigation/native";
import passwordRecoverCodeSchema from "../../validation/schemas/passwordRecoverCodeSchema";
import Validation from "../../components/Validation";
import Screen from "../../components/Screen";
import ShakingComponent from "../../components/ShakingComponent";
import {
  resendPhoneVerificationCode,
  submitPhoneVerificationCode,
} from "../../redux/signUpSlice";
import { RootState } from "../../store";
import {
  VERIFICATION_CODE_LENGTH,
  PHONE_VERIFICATION_SUCCESS,
  HOME_SCREEN,
} from "../../constants";
import { listenForSms } from "../../helpers/sms";

import styles from "./styles";

interface CodeFormValues extends Asserts<typeof passwordRecoverCodeSchema> {}

const PhoneVerification = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const [value, setValue] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: VERIFICATION_CODE_LENGTH });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.signUp,
  );

  useEffect(() => {
    const getSmsCode = (message: string) => {
      setSmsCode(message);
      handleSubmit({ code: message });
    };

    listenForSms(getSmsCode);

    dispatch(resendPhoneVerificationCode());
  }, []);

  const handleSubmit = async (values: any) => {
    try {
      await dispatch(submitPhoneVerificationCode(values));

      navigate(PHONE_VERIFICATION_SUCCESS);
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
      dispatch(resendPhoneVerificationCode());
    } catch (error) {
      Toast.show({
        text: error,
        type: "danger",
        duration: 2000,
      });
    }
  };

  const initialValues: CodeFormValues = {
    code: "",
  };

  return (
    <Screen
      isLoading={loading}
      title={t("phone_verification.title")}
      titleStyle={styles.title}
    >
      <View>
        <Text style={styles.contentInfo}>
          <Trans
            defaults={`phone_verification.info`}
            values={{ phoneNumber: data.phoneNumber }}
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
                    {t("phone_verification.label")}
                  </Label>
                  <ShakingComponent
                    shake={
                      error && values.code?.length === VERIFICATION_CODE_LENGTH
                    }
                  >
                    <Validation formik={formik} name="code" showMessage={true}>
                      <CodeField
                        ref={ref}
                        {...props}
                        value={smsCode || values.code}
                        defaultValue={smsCode}
                        onChangeText={text => {
                          handleChange(text, setFieldValue);
                        }}
                        onBlur={handleBlur("code")}
                        cellCount={VERIFICATION_CODE_LENGTH}
                        rootStyle={styles.codeFiledRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                          <View
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            style={[
                              styles.cellRoot,
                              isFocused && styles.focusCell,
                            ]}
                          >
                            <Text style={styles.cellText}>
                              {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                          </View>
                        )}
                      />
                    </Validation>
                  </ShakingComponent>
                </View>
                <Button
                  full
                  transparent
                  disabled={data && !data.sent}
                  style={styles.resendButton}
                  onPress={() => {
                    resendCode();
                    setFieldValue("code", "");
                  }}
                >
                  <Icon name="refresh" style={styles.resendButtonIcon} />
                  <Text>{t("phone_verification.resend_code")}</Text>
                </Button>

                <Button
                  full
                  transparent
                  onPress={() => {
                    navigate(HOME_SCREEN);
                  }}
                >
                  <Text>{t("phone_verification.cancel")}</Text>
                </Button>
              </Form>
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default PhoneVerification;

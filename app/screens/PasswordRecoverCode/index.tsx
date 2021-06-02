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
  resendRecoveryCode,
  submitRecoveryCode,
} from "../../redux/forgotPasswordSlice";
import { RootState } from "../../store";
import { VERIFICATION_CODE_LENGTH, SECURITY_QUESTION } from "../../constants";
import { listenForSms } from "../../helpers/sms";

import styles from "./styles";

interface CodeFormValues extends Asserts<typeof passwordRecoverCodeSchema> {}

const PasswordRecoverCode = () => {
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
  const {
    data = {},
    loading,
    error,
  } = useSelector((state: RootState) => state.forgotPassword);

  useEffect(() => {
    const getSmsCode = (message: string) => {
      setSmsCode(message);
      handleSubmit({ code: message });
    };

    listenForSms(getSmsCode);
  }, []);

  const handleSubmit = async (values: any) => {
    try {
      await dispatch(
        submitRecoveryCode({ ...values, username: data?.username }),
      );

      navigate(SECURITY_QUESTION);
    } catch {
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

  const resendCode = (username: string = "") => {
    try {
      dispatch(resendRecoveryCode({ username }));
    } catch {
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
      title={t("password_recover_code.title")}
      hasHeader={true}
    >
      <View>
        <Text style={styles.contentInfo}>
          <Trans
            defaults={`password_recover_code.phone_info`}
            values={{ username: `+374${data.username}` }}
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
                    {t("password_recover_code.label")}
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
                        value={values.code}
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
                    resendCode(data && data.username);
                    setFieldValue("code", "");
                  }}
                >
                  <Icon name="refresh" style={styles.resendButtonIcon} />
                  <Text>{t("password_recover_code.resend_code")}</Text>
                </Button>
              </Form>
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default PasswordRecoverCode;

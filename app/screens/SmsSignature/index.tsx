import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import {
  View,
  Text,
  CheckBox,
  Body,
  ListItem,
  Form,
  Button,
  Label,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { Asserts } from "yup";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import Screen from "../../components/Screen";
import ShakingComponent from "../../components/ShakingComponent";
import Validation from "../../components/Validation";
import smsSignatureSchema from "../../validation/schemas/smsSignatureSchema";

import SmsSignatureIcon from "../../assets/images/sms-signature-icon.svg";

import styles from "./styles";

const SMS_CODE_LENGTH = 4;

interface SmsSignaureFormValues extends Asserts<typeof smsSignatureSchema> {}

const PdfTrigger = ({ doc }: any) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  return (
    <Text
      onPress={() => navigate("PDF_VIEWER", { uri: doc.fullPath })}
      style={styles.pdfLink}
    >
      {t(`credit_steps.sms_signature.${doc.type}`)}
    </Text>
  );
};

const SmsSignature = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: SMS_CODE_LENGTH });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const initialValues: SmsSignaureFormValues = {
    code: "",
    termsAccepted: false,
    agreement: false,
    loanPdfsConfirmed: false,
  };

  const handleSubmit = async (values: any) => {
    // TODO:
  };

  const handleChange = (text: string, setFieldValue: Function) => {
    setFieldValue("code", text);

    if (text.length === SMS_CODE_LENGTH) {
      handleSubmit({ code: text });
    }
  };

  const resendCode = () => {
    // TODO:
  };

  const composePdfLabel = (documents: any[]) => {
    const components = documents.map((doc = {}) => {
      return <PdfTrigger doc={doc} />;
    });

    return (
      <Trans
        style={styles.checkboxLabel}
        defaults={`credit_steps.sms_signature.pdf_confirmation_text`}
        components={components}
        parent={Text}
      />
    );
  };

  return (
    <Screen isLoading={false} hasHeader={false} isNonScrolling={false}>
      <View>
        <View style={styles.img}>
          <View style={styles.imgWrapper}>
            <SmsSignatureIcon style={styles.icon} />
          </View>
        </View>

        <Formik
          initialValues={initialValues}
          validationSchema={smsSignatureSchema}
          onSubmit={handleSubmit}
          component={formik => {
            const { values, handleBlur, setFieldValue } = formik;

            return (
              <Form>
                <Validation
                  formik={formik}
                  name="loanPdfsConfirmed"
                  showMessage={false}
                >
                  <ListItem style={styles.listItem}>
                    <CheckBox
                      checked={values.loanPdfsConfirmed}
                      onPress={() =>
                        setFieldValue(
                          "loanPdfsConfirmed",
                          !values.loanPdfsConfirmed,
                        )
                      }
                    />
                    <Body>
                      <Text style={styles.checkboxLabel}>
                        {composePdfLabel([
                          {
                            type: "personal_sheet",
                            fullPath:
                              "http://samples.leanpub.com/thereactnativebook-sample.pdf",
                          },
                          {
                            type: "loan_contract",
                            fullPath:
                              "http://samples.leanpub.com/thereactnativebook-sample.pdf",
                          },
                          {
                            type: "what_to_do",
                            fullPath:
                              "http://samples.leanpub.com/thereactnativebook-sample.pdf",
                          },
                        ])}
                      </Text>
                    </Body>
                  </ListItem>
                </Validation>
                <ListItem style={styles.listItem}>
                  <CheckBox
                    checked={values.termsAccepted}
                    onPress={() =>
                      setFieldValue("termsAccepted", !values.termsAccepted)
                    }
                  />
                  <Body>
                    <Text style={styles.checkboxLabel}>
                      {t("credit_steps.sms_signature.confirmation_text")}
                    </Text>
                  </Body>
                </ListItem>
                <ListItem style={styles.listItem}>
                  <CheckBox
                    checked={values.agreement}
                    onPress={() =>
                      setFieldValue("agreement", !values.agreement)
                    }
                  />
                  <Body>
                    <Text style={styles.checkboxLabel}>
                      {t("credit_steps.sms_signature.agreement_text")}
                    </Text>
                  </Body>
                </ListItem>

                <Label>{t("credit_steps.sms_signature.label")}</Label>
                <ShakingComponent
                  shake={values.code?.length === SMS_CODE_LENGTH}
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
                      cellCount={SMS_CODE_LENGTH}
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

                <Button
                  full
                  rounded
                  style={styles.getCodeButton}
                  onPress={() => {
                    resendCode();
                    setFieldValue("code", "");
                  }}
                >
                  <Text>{t("credit_steps.sms_signature.get_code")}</Text>
                </Button>
              </Form>
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default SmsSignature;

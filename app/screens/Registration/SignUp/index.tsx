import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  View,
  Text,
  Form,
  Button,
  Toast,
  Icon,
  ListItem,
  CheckBox,
  Body,
} from "native-base";
import { Formik } from "formik";
import { Asserts } from "yup";
import { useNavigation } from "@react-navigation/native";
import signUpSchema from "../../../validation/schemas/signUpSchema";
import Validation from "../../../components/Validation";
import InputComponent from "./InputComponent";
import Screen from "../../../components/Screen";
import { signUp } from "../../../redux/signUpSlice";
import { RootState } from "../../../store";
import { HOME_SCREEN, EMAIL_VERIFICATION } from "../../../constants";

import styles from "./styles";

interface SignUpFormValues extends Asserts<typeof signUpSchema> {}

const SignUp = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { loading } = useSelector((state: RootState) => state.signUp);

  const handleSubmit = async (values: any) => {
    try {
      await dispatch(
        signUp({
          gcd: values.documentNumber,
          email: values.email,
          phoneNumber: values.phoneNumber,
        }),
      );

      navigate(EMAIL_VERIFICATION);
    } catch (e) {
      Toast.show({
        text: e.message,
        type: "danger",
        duration: 5000,
      });
    }
  };

  const initialValues: SignUpFormValues = {
    email: "",
    phoneNumber: "",
    documentNumber: "",
    isChecked: false,
  };

  return (
    <Screen
      isLoading={loading}
      title={t("sign_up.title")}
      hasHeader={true}
      isNonScrolling={false}
    >
      <View style={styles.content}>
        <View style={styles.caption}>
          <Text>{t("sign_up.label")}</Text>
        </View>

        <Formik
          initialValues={initialValues}
          validationSchema={signUpSchema}
          onSubmit={handleSubmit}
          component={props => {
            const { values, handleSubmit, setFieldValue } = props;

            return (
              <Form>
                <View>
                  <InputComponent
                    formik={props}
                    name="email"
                    icon={<Icon name="mail-outline" style={styles.inputIcon} />}
                    label={t("sign_up.email")}
                  />
                  <InputComponent
                    formik={props}
                    name="phoneNumber"
                    icon={<Icon name="call-outline" style={styles.inputIcon} />}
                    label={t("sign_up.phone_number")}
                  />
                  <InputComponent
                    formik={props}
                    name="documentNumber"
                    icon={
                      <Icon
                        name="document-text-outline"
                        style={styles.inputIcon}
                      />
                    }
                    label={t("sign_up.document_number")}
                  />
                  <Validation formik={props} name="isChecked" isNested={true}>
                    <ListItem style={styles.checkboxContainer}>
                      <CheckBox
                        checked={values.isChecked}
                        onPress={() =>
                          setFieldValue("isChecked", !values.isChecked)
                        }
                      />
                      <Body>
                        <Text style={styles.termsConditions}>
                          {t("sign_up.terms_conditions")}
                        </Text>
                      </Body>
                    </ListItem>
                  </Validation>
                </View>
                <Button
                  full
                  rounded
                  style={styles.button}
                  onPress={handleSubmit}
                >
                  <Text>{t("sign_up.continue")}</Text>
                </Button>
                <Text style={styles.accountText}>
                  {t("sign_up.already_have_account")}
                  <Button
                    transparent
                    style={styles.signUp}
                    onPress={() => navigate(HOME_SCREEN)}
                  >
                    <Text style={styles.signUpLink}>{t("sign_up.login")}</Text>
                  </Button>
                </Text>
              </Form>
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default SignUp;

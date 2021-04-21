import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Formik } from "formik";
import { Asserts } from "yup";
import { Form, Item, Input, Label, View, Text, Button } from "native-base";
import loginSchema from "../../validation/schemas/loginSchema";
import DrawerButton from "../LoginDrawer/DrawerButton";
import Validation from "../../components/Validation";
import PasswordInput from "../PasswordInput";

import styles from "./styles";

interface SignInFormValues extends Asserts<typeof loginSchema> {}

const LoginForm = ({ t }: WithTranslation) => {
  const handleSubmit = (values: Object) => {
    console.log(values);
  };

  const initialValues: SignInFormValues = {
    username: "",
    password: "",
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
        component={props => {
          const { values, handleChange, handleBlur, handleSubmit } = props;

          return (
            <Form>
              <View>
                <Validation formik={props} name="username" showMessage={true}>
                  <Item floatingLabel>
                    <Label>{t("login.username")}</Label>
                    <Input
                      value={values.username}
                      onChangeText={handleChange("username")}
                      onBlur={handleBlur("username")}
                    />
                  </Item>
                </Validation>
              </View>
              <Validation formik={props} name="password" showMessage={true}>
                <PasswordInput
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
              </Validation>
              <Button transparent style={styles.forgotPassword}>
                <Text>{t("login.forgot_password")}</Text>
              </Button>
              <DrawerButton
                full
                rounded
                style={styles.button}
                onPress={handleSubmit}
              >
                <Text>{t("login.login")}</Text>
              </DrawerButton>
            </Form>
          );
        }}
      />
    </View>
  );
};

export default withTranslation()(LoginForm);

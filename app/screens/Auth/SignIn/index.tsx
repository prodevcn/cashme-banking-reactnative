import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Formik } from "formik";
import { Asserts } from "yup";
import { Form, Item, Input, Label, Button, Text } from "native-base";
import loginSchema from "../../../validation/schemas/loginSchema";
import Screen from "../../../components/Screen";
import styles from "./styles";

interface SignInFormValues extends Asserts<typeof loginSchema> {}

class SignIn extends Component<WithTranslation> {
  handleSubmit = (values: Object) => {
    console.log(values);
  };

  render() {
    const { t } = this.props;

    const initialValues: SignInFormValues = {
      username: "",
      password: "",
    };

    return (
      <Screen>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={this.handleSubmit}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form>
              <Item floatingLabel>
                <Label>{t("login.username")}</Label>
                <Input
                  value={values.username}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                />
              </Item>
              <Item floatingLabel last>
                <Label>{t("login.password")}</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
              </Item>

              <Button primary full style={styles.button} onPress={handleSubmit}>
                <Text> {t("login.login")} </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Screen>
    );
  }
}

export default withTranslation()(SignIn);

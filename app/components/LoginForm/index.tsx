import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Formik } from "formik";
import { Asserts } from "yup";
import { Form, Item, Input, Label, View, Text, Button } from "native-base";
import loginSchema from "../../validation/schemas/loginSchema";
import DrawerButton from "../LoginDrawer/DrawerButton";
import Validation from "../../components/Validation";
import styles from "./styles";

interface SignInFormValues extends Asserts<typeof loginSchema> {}

class LoginForm extends Component<WithTranslation> {
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
      <View style={styles.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={this.handleSubmit}
          component={props => {
            const { values, handleChange, handleBlur, handleSubmit } = props;

            return (
              <Form>
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
                <Validation formik={props} name="password" showMessage={true}>
                  <Item floatingLabel last>
                    <Label>{t("login.password")}</Label>
                    <Input
                      secureTextEntry={true}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                    />
                  </Item>
                </Validation>
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
  }
}

export default withTranslation()(LoginForm);

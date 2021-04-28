import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  View,
  Text,
  Form,
  Button,
  Item,
  Label,
  Input,
  Toast,
} from "native-base";
import { Formik } from "formik";
import { Asserts } from "yup";
import forgotPasswordSchema from "../../validation/schemas/forgotPasswordSchema";
import Validation from "../../components/Validation";
import Screen from "../../components/Screen";
import { forgotPassword } from "../../redux/forgotPasswordSlice";
import { RootState } from "../../store";

import styles from "./styles";

interface SignInFormValues extends Asserts<typeof forgotPasswordSchema> {}

const ForgotPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading, error } = useSelector(
    (state: RootState) => state.forgotPassword,
  );

  const getValidUsername = (username: string) => {
    if (isNaN(+username)) {
      return username;
    }

    return username.substr(username.length - 8);
  };

  const handleSubmit = (values: any) => {
    const username = getValidUsername(values.username);

    dispatch(forgotPassword({ username }));
  };

  const initialValues: SignInFormValues = {
    username: "",
  };

  if (error) {
    Toast.show({
      text: error,
      type: "danger",
      duration: 5000,
    });
  }

  return (
    <Screen innerStyle={styles.container} isLoading={loading}>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>{t("forgot_password.title")}</Text>
        <Text style={styles.contentLabel}>{t("forgot_password.label")}</Text>

        <Formik
          initialValues={initialValues}
          validationSchema={forgotPasswordSchema}
          onSubmit={handleSubmit}
          component={props => {
            const { values, handleChange, handleBlur, handleSubmit } = props;

            return (
              <Form>
                <View>
                  <Validation formik={props} name="username" showMessage={true}>
                    <Item floatingLabel>
                      <Label>{t("forgot_password.username")}</Label>
                      <Input
                        value={values.username}
                        onChangeText={handleChange("username")}
                        onBlur={handleBlur("username")}
                      />
                    </Item>
                  </Validation>
                </View>
                <Button
                  full
                  rounded
                  style={styles.button}
                  onPress={handleSubmit}
                >
                  <Text>{t("forgot_password.continue")}</Text>
                </Button>
              </Form>
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default ForgotPassword;

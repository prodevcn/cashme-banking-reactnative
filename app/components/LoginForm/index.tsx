import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { Asserts } from "yup";
import { useNavigation } from "@react-navigation/native";
import { Form, Item, Input, Label, View, Text } from "native-base";
import DrawerButton from "../LoginDrawer/DrawerButton";
import Validation from "../../components/Validation";
import PasswordInput from "../PasswordInput";
import Loader from "../Loader";
import loginSchema from "../../validation/schemas/loginSchema";
import { signIn } from "../../redux/authSlice";
import { RootState } from "../../store";

import styles from "./styles";

interface SignInFormValues extends Asserts<typeof loginSchema> {}
interface SignInFormProps {
  onLoginSuccess: Function;
}

const LoginForm = ({ onLoginSuccess }: SignInFormProps) => {
  const { t } = useTranslation();
  const { loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const handleSubmit = async (values: any) => {
    try {
      await dispatch(signIn(values));
      onLoginSuccess();
    } catch {
      // TODO:
    }
  };

  const initialValues: SignInFormValues = {
    username: "",
    password: "",
  };

  return (
    <>
      {loading && <Loader key="Loader" isFullScreen={true} />}
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
                      <Label style={styles.inputLabel}>
                        {t("login.username")}
                      </Label>
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
                    label={t("login.password")}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                </Validation>
                <DrawerButton
                  transparent
                  style={styles.forgotPassword}
                  onPress={() => navigate("FORGOT_PASSWORD")}
                >
                  <Text>{t("login.forgot_password")}</Text>
                </DrawerButton>
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
    </>
  );
};

export default LoginForm;

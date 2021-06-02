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
import { useNavigation } from "@react-navigation/native";
import forgotPasswordSchema from "../../validation/schemas/forgotPasswordSchema";
import Validation from "../../components/Validation";
import Screen from "../../components/Screen";
import { forgotPassword } from "../../redux/forgotPasswordSlice";
import { RootState } from "../../store";
import { PASSWORD_RECOVER_CODE } from "../../constants";

import styles from "./styles";

interface SignInFormValues extends Asserts<typeof forgotPasswordSchema> {}

const ForgotPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { loading, error } = useSelector(
    (state: RootState) => state.forgotPassword,
  );

  const getValidUsername = (username: string) => {
    if (isNaN(+username)) {
      return username;
    }

    return username.substr(username.length - 8);
  };

  const handleSubmit = async (values: any) => {
    const username = getValidUsername(values.username);

    try {
      await dispatch(forgotPassword({ username }));

      navigate(PASSWORD_RECOVER_CODE);
    } catch (error) {
      Toast.show({
        text: error,
        type: "danger",
        duration: 5000,
      });
    }
  };

  const initialValues: SignInFormValues = {
    username: "",
  };

  return (
    <Screen
      isLoading={loading}
      title={t("forgot_password.title")}
      hasHeader={true}
    >
      <View style={styles.content}>
        <View style={styles.caption}>
          <Text>{t("forgot_password.label")}</Text>
        </View>

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

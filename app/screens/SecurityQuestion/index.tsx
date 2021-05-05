import React, { useEffect } from "react";
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
  Icon,
} from "native-base";
import { Formik } from "formik";
import { Asserts } from "yup";
import { useNavigation } from "@react-navigation/native";
import securityQuestionSchema from "../../validation/schemas/securityQuestionSchema";
import Validation from "../../components/Validation";
import Screen from "../../components/Screen";
import {
  getSecurityQuestion,
  submitSecurityAnswer,
} from "../../redux/forgotPasswordSlice";
import { RootState } from "../../store";
import { NEW_PASSWORD } from "../../constants";

import styles from "./styles";

interface SecurityQuestionFormValues
  extends Asserts<typeof securityQuestionSchema> {}

const SecurityQuestion = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.forgotPassword,
  );

  useEffect(() => {
    const username = data?.username || "";

    dispatch(getSecurityQuestion({ username }));
  }, []);

  const handleSubmit = async (values: any) => {
    try {
      const username = data?.username || "";

      await dispatch(submitSecurityAnswer({ username, answer: values.answer }));

      navigate(NEW_PASSWORD);
    } catch (e) {
      Toast.show({
        text: error,
        type: "danger",
        duration: 5000,
      });
    }
  };

  const initialValues: SecurityQuestionFormValues = {
    answer: "",
  };

  return (
    <Screen isLoading={loading} title={t("security_question.title")}>
      <View style={styles.content}>
        <View style={styles.caption}>
          <Icon name="help-circle-outline" style={styles.questionIcon} />
          <Text style={styles.text}>{data?.question}</Text>
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={securityQuestionSchema}
          onSubmit={handleSubmit}
          component={props => {
            const { values, handleChange, handleBlur, handleSubmit } = props;

            return (
              <Form>
                <View>
                  <Validation formik={props} name="answer" showMessage={true}>
                    <Item floatingLabel>
                      <Label>{t("security_question.answer")}</Label>
                      <Input
                        value={values.answer}
                        onChangeText={handleChange("answer")}
                        onBlur={handleBlur("answer")}
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
                  <Text>{t("security_question.continue")}</Text>
                </Button>
              </Form>
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default SecurityQuestion;

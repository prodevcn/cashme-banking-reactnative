import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { Asserts } from "yup";
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

import securityQuestionSchema from "../../../validation/schemas/securityQuestionSchema";
import Validation from "../../../components/Validation";
import Screen from "../../../components/Screen";
import Dropdown, { DropdownItem } from "../../../components/Dropdown";
import {
  getSecurityQuestions,
  setSecurityQuestion,
} from "../../../redux/securityQuestionSlice";
import { RootState } from "../../../store";
import { PROFILE_CREATE_SUCCESS } from "../../../constants";

import styles from "./styles";

interface SecurityQuestionFormValues
  extends Asserts<typeof securityQuestionSchema> {}

const SecurityQuestionSetup = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.securityQuestion,
  );
  const initialValues: SecurityQuestionFormValues = {
    id: 0,
    answer: "",
  };

  useEffect(() => {
    dispatch(getSecurityQuestions());
  }, []);

  const handleSubmit = async (values: any) => {
    try {
      await dispatch(setSecurityQuestion(values));

      navigate(PROFILE_CREATE_SUCCESS);
    } catch (e) {
      Toast.show({
        text: error,
        type: "danger",
        duration: 5000,
      });
    }
  };

  const formatQuestion = (questions: any): Array<DropdownItem> => {
    return (
      questions &&
      questions.map((item: any) => {
        return { text: item.question, value: item.id };
      })
    );
  };

  return (
    <Screen
      isLoading={loading}
      isNonScrolling={true}
      title={t("security_question.title")}
      innerStyle={styles.main}
      hasHeader={true}
    >
      <View style={styles.content}>
        <Text style={styles.pageCaption}>
          {t("security_question_setup.caption")}
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={securityQuestionSchema}
          onSubmit={handleSubmit}
          component={props => {
            const {
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            } = props;

            return (
              <Form>
                <Dropdown
                  onChange={(item: any) => {
                    setFieldValue("id", item.value);
                  }}
                  defaultText={t("security_question_setup.title")}
                  options={formatQuestion(data?.questions)}
                />
                <View style={styles.formArea}>
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

export default SecurityQuestionSetup;

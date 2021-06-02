import React from "react";
import { FormikContextType } from "formik";
import { View, Item, Label, Input, Icon } from "native-base";
import Validation from "../../../components/Validation";

import styles from "./styles";

interface InputComponentProps {
  formik: FormikContextType<any>;
  name: string;
  icon: any;
  label: string;
}

const InputComponent = ({ formik, name, label, icon }: InputComponentProps) => (
  <View style={styles.inputSection}>
    <Validation formik={formik} name={name} showMessage={true}>
      <Item floatingLabel>
        {icon}
        <Label>{label}</Label>
        <Input
          value={formik.values[name]}
          onChangeText={formik.handleChange(name)}
          onBlur={formik.handleBlur(name)}
        />
        {formik.values[name] && !formik.errors[name] ? (
          <Icon name="checkmark-outline" style={styles.inputValidIcon} />
        ) : (
          <></>
        )}
      </Item>
    </Validation>
  </View>
);

export default InputComponent;

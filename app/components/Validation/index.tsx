import React, { Component, ReactElement } from "react";
import { FormikContextType } from "formik";
import { View, Text } from "native-base";
import AlertIcon from "../../assets/images/alert.svg";
import styles from "./styles";

interface ValidationProps {
  children: ReactElement;
  name: string;
  showMessage?: boolean;
  formik: FormikContextType<any>;
}

class Validation extends Component<ValidationProps> {
  render() {
    const {
      children,
      name,
      showMessage,
      formik: { errors, touched, setFieldTouched, handleChange, handleBlur },
    } = this.props;

    return (
      <React.Fragment>
        {React.Children.map(children, (child: ReactElement) => {
          return React.cloneElement(child, {
            style: [
              child.props.style,
              touched[name] && errors[name] ? styles.invalid : "",
            ],
            name: name,
            id: name,
            onChange: (args: object, data: object) => {
              setFieldTouched(name, false);
              if (typeof child.props.onChange === "function") {
                child.props.onChange(args, data);
              } else {
                handleChange(name);
              }
            },
            onBlur: (args: object) => {
              if (typeof child.props.onBlur === "function") {
                child.props.onBlur(args);
              } else {
                handleBlur(name);
              }
            },
          });
        })}
        {showMessage && errors[name] && touched[name] && (
          <View style={styles.errorContainer}>
            <AlertIcon style={styles.alertIcon} fill="red" />
            <Text style={styles.error}>{errors[name]}</Text>
          </View>
        )}
      </React.Fragment>
    );
  }
}

export default Validation;

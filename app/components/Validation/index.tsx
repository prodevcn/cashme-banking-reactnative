import React, { Component, ReactElement } from "react";
import { FormikContextType } from "formik";
import { Text } from "react-native";
import { Icon, View } from "native-base";
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
                handleChange(args);
              }
            },
            onBlur: (args: object) => {
              if (typeof child.props.onBlur === "function") {
                child.props.onBlur(args);
              } else {
                handleBlur(args);
              }
            },
          });
        })}
        {showMessage && errors[name] && touched[name] && (
          <View style={styles.errorContainer}>
            <Icon
              style={styles.alertIcon}
              name="alert-triangle"
              type="Feather"
            />
            <Text style={styles.error}>{errors[name]}</Text>
          </View>
        )}
      </React.Fragment>
    );
  }
}

export default Validation;

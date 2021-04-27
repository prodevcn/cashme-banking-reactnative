import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Item, Input, Label, View, NativeBase, Icon } from "native-base";
import { TouchableOpacity } from "@gorhom/bottom-sheet";

import styles from "./styles";

const PasswordInput = (props: NativeBase.Input) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const togglePassword = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const { t } = useTranslation();

  return (
    <View style={styles.passwordSection}>
      <View>
        <Item floatingLabel style={props.style}>
          <Label style={styles.inputLabel}>{t("login.password")}</Label>
          <Input secureTextEntry={secureTextEntry} {...props} />
        </Item>
      </View>
      <View style={styles.eyeIcon}>
        <TouchableOpacity onPress={togglePassword}>
          {secureTextEntry ? (
            <Icon name="eye-outline" />
          ) : (
            <Icon name="eye-off-outline" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Item, Input, Label, View, NativeBase } from "native-base";
import { TouchableOpacity } from "@gorhom/bottom-sheet";

import EyeIcon from "../../assets/images/eye.svg";

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
        <Item floatingLabel>
          <Label>{t("login.password")}</Label>
          <Input secureTextEntry={secureTextEntry} {...props} />
        </Item>
      </View>
      <View style={styles.eyeIcon}>
        <TouchableOpacity onPress={togglePassword}>
          <EyeIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;

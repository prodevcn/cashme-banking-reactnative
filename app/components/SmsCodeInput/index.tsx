import React, { useEffect, useState } from "react";
import { View, Text } from "native-base";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import ShakingComponent from "../../components/ShakingComponent";
import { listenForSms } from "../../helpers/sms";

import styles from "./styles";

interface SmsCodeInputProps {
  code: string;
  length: number;
  onChange?: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onSubmit: Function;
  shakeHandler: () => boolean;
}

const SmsCodeInput = ({
  code,
  length,
  onSubmit,
  onChange,
  onBlur,
  shakeHandler,
}: SmsCodeInputProps) => {
  const [value, setValue] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: length });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    const getSmsCode = (message: string) => {
      setSmsCode(message);
      onSubmit({ code: message });
    };

    listenForSms(getSmsCode);
  }, []);

  return (
    <ShakingComponent shake={shakeHandler()}>
      <CodeField
        ref={ref}
        {...props}
        value={smsCode || code}
        defaultValue={smsCode}
        onChangeText={onChange}
        onBlur={onBlur}
        cellCount={length}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </ShakingComponent>
  );
};

export default SmsCodeInput;

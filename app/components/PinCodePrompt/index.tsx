import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-native-modal";
import { View } from "native-base";
import PINCode from "@haskkor/react-native-pincode";
import PubSub from "pubsub-js";
import * as auth from "../../helpers/auth";
import { PIN_KEY } from "../../constants";

import styles from "./styles";

let callback: Function;

const PinCodePrompt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [pin, setPin] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    PubSub.subscribe(PIN_KEY, (msg: string, cb: Function) => {
      callback = cb;
      setIsVisible(true);
    });

    async function getPin() {
      const pin = await auth.getPin();
      setPin(pin);
    }

    getPin();
  }, []);

  const onSuccess = (pin: string | undefined) => {
    setIsVisible(false);
    callback(true, pin);
  };

  const onfailure = (attempts: number) => {
    callback(false, attempts);
  };

  return (
    <>
      <Modal
        isVisible={isVisible}
        customBackdrop={<View style={styles.modal} />}
        backdropOpacity={0.9}
      >
        <View style={styles.container}>
          <PINCode
            storedPin={pin}
            status="enter"
            touchIDDisabled={true}
            pinCodeKeychainName={PIN_KEY}
            finishProcess={onSuccess}
            onFail={onfailure}
            disableLockScreen={true}
            storePin={() => {}}
            titleEnter={t("pin_code_prompt.title")}
          />
        </View>
      </Modal>
    </>
  );
};

export default PinCodePrompt;

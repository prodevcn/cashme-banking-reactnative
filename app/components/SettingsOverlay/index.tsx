import React, { ComponentType, useEffect, useState } from "react";
import { compose } from "redux";
import { WithTranslation, withTranslation } from "react-i18next";
import Modal from "react-native-modal";
import { Button, Text, View } from "native-base";
import Storage from "../../util/storage";
import { DISMISS_SECURITY_OVERLAY } from "../../constants/storage";
import Logo from "../Logo";
import MenuButton from "../MenuButton";

import PinIcon from "../../assets/images/pin.svg";
import FaceRecognitionIcon from "../../assets/images/face-recognition.svg";
import FingerprintIcon from "../../assets/images/finger-print.svg";

import styles from "./styles";

const SettingsOverlay = ({ t }: WithTranslation) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    Storage.getItem({ key: DISMISS_SECURITY_OVERLAY }).then(value => {
      setIsVisible(!value);
    });
  }, []);

  const skip = () => {
    setIsVisible(false);
  };

  const hideOverlay = () => {
    Storage.setItem({
      key: DISMISS_SECURITY_OVERLAY,
      value: true,
    }).then(() => {
      skip();
    });
  };

  return (
    <>
      <Modal
        isVisible={isVisible}
        customBackdrop={<View style={styles.modal} />}
        backdropOpacity={0.9}
      >
        <View style={styles.container}>
          <Logo style={styles.logo} />
          <View style={styles.title}>
            <Text style={styles.titleText}>{t("settings_overlay.title")}</Text>
          </View>
          <View style={styles.buttonSection}>
            <MenuButton
              title={t("settings_overlay.pin_code")}
              description={t("settings_overlay.create_pin_code")}
              Icon={PinIcon}
            />
            <MenuButton
              title={t("settings_overlay.touch_id")}
              description={t("settings_overlay.enable_touch_id")}
              Icon={FingerprintIcon}
            />
            <MenuButton
              title={t("settings_overlay.face_recognition")}
              description={t("settings_overlay.use_face_recognition")}
              Icon={FaceRecognitionIcon}
            />
          </View>

          <Button
            full
            transparent
            large
            onPress={skip}
            style={styles.actionButton}
          >
            <Text style={styles.skipText}>{t("settings_overlay.skip")}</Text>
          </Button>
          <Button
            full
            transparent
            small
            onPress={hideOverlay}
            style={styles.actionButton}
          >
            <Text style={styles.dismissText}>
              {t("settings_overlay.dont_show_again")}
            </Text>
          </Button>
        </View>
      </Modal>
    </>
  );
};

export default compose<ComponentType>(withTranslation())(SettingsOverlay);

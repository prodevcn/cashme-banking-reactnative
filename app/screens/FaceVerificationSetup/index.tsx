import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { Button, View, Text } from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";

import Screen from "../../components/Screen";
import ChangeIdSheet from "./ChangeIdSheet";
import { HOME_SCREEN, FACE_RECOGNITION } from "../../constants";
import { getCameraPermission } from "../../helpers/permission";

import GlassIcon from "../../assets/images/glass.svg";
import FaceIcon from "../../assets/images/face.svg";
import styles from "./styles";

const FaceVerificationSetup = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSelfieBtn = async () => {
    const status = await getCameraPermission();
    if (status) {
      navigate(FACE_RECOGNITION);
    }
  };

  return (
    <>
      <Screen
        title={t("face_verification_setup.title")}
        titleStyle={styles.titleStyle}
      >
        <View style={styles.container}>
          <View>
            <View>
              <View style={styles.box}>
                <View style={styles.stepper}>
                  <View style={styles.leftBoxSideShadow}>
                    <View style={styles.leftBoxSide}>
                      <Text style={styles.stepNum}>1</Text>
                      <Text style={styles.stepTxt}>
                        {t("face_verification_setup.step")}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.line} />
                </View>
                <View style={styles.rightBoxSide}>
                  <Text style={styles.boxTitle}>
                    {t("face_verification_setup.box_title")}
                  </Text>
                  <Text style={styles.boxDesc}>
                    {t("face_verification_setup.box_description")}
                  </Text>
                  <Text style={styles.boxID}>AB12356879</Text>
                  <Text
                    style={styles.btnID}
                    onPress={() => {
                      bottomSheetRef.current?.expand();
                    }}
                  >
                    {t("face_verification_setup.not_my_id")}
                  </Text>
                </View>
              </View>

              <View style={styles.box}>
                <View style={styles.stepper}>
                  <View style={styles.leftBoxSideShadow}>
                    <View style={styles.leftBoxSide}>
                      <Text style={styles.stepNum}>2</Text>
                      <Text style={styles.stepTxt}>
                        {t("face_verification_setup.step")}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rightBoxSide}>
                  <Text style={styles.boxTitle}>
                    {t("face_verification_setup.take_selfie")}
                  </Text>
                  <View style={styles.boxDescContainer}>
                    <FaceIcon style={styles.boxDescIcon} />
                    <Text style={styles.boxDesc}>
                      {t("face_verification_setup.face_forward")}
                    </Text>
                  </View>
                  <View style={styles.boxDescContainer}>
                    <GlassIcon style={styles.boxDescIcon} />
                    <Text style={styles.boxDesc}>
                      {t("face_verification_setup.remove_glasses")}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <Button
              full
              rounded
              primary
              style={styles.takeSelfieBtn}
              onPress={handleSelfieBtn}
            >
              <Text>{t("face_verification_setup.take_selfie_button")}</Text>
            </Button>
          </View>

          <Button
            full
            transparent
            onPress={() => {
              navigate(HOME_SCREEN);
            }}
          >
            <Text>{t("face_verification_setup.cancel")}</Text>
          </Button>
        </View>
      </Screen>
      <ChangeIdSheet ref={bottomSheetRef} />
    </>
  );
};

export default FaceVerificationSetup;

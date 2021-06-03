import React, { useRef, useMemo, useCallback } from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button, Spinner } from "native-base";
import { RNCamera } from "react-native-camera";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import Screen from "../../../../components/Screen";
import { sendFaceSnapshot } from "../../../../redux/faceRecognitionSlice";
import { RootState } from "../../../../store";

import styles from "./styles";
import customColor from "../../../../theme/customColor";
import ArrowLeft from "../../../../assets/images/arrow-left.svg";
import FaceIcon from "../../../../assets/images/face.svg";
import GlassIcon from "../../../../assets/images/glass.svg";
import BrightnessIcon from "../../../../assets/images/brightness.svg";
import { PASSWORD_SETUP } from "../../../../constants";

const FaceRecognition = () => {
  const camera = useRef<RNCamera>(null);
  const ref = useRef<BottomSheetModal>(null);
  const { goBack, navigate } = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading, error } = useSelector(
    (state: RootState) => state.faceRecognition,
  );
  const snapPoints = useMemo(() => [0, "50%"], []);

  const takePicture = async () => {
    if (!camera) {
      return;
    }

    const options = { quality: 1, base64: true };
    const data = await camera.current?.takePictureAsync(options);

    try {
      await dispatch(sendFaceSnapshot(data?.base64));

      navigate(PASSWORD_SETUP);
    } catch (error) {
      bottomSheetOpen();

      // TODO: REMOVE! This is for demo
      navigate(PASSWORD_SETUP);
    }
  };

  const bottomSheetOpen = useCallback(() => {
    ref.current?.present();
    ref.current?.expand();
  }, []);

  const bottomSheetClose = useCallback(() => {
    ref.current?.dismiss();
  }, []);

  return (
    <BottomSheetModalProvider>
      <Screen innerStyle={styles.fullScreen}>
        <>
          <RNCamera
            ref={camera}
            style={styles.container}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: "Permission to use camera",
              message: "We need your permission to use your camera",
              buttonPositive: "Ok",
              buttonNegative: "Cancel",
            }}
            androidRecordAudioPermissionOptions={{
              title: "Permission to use audio recording",
              message: "We need your permission to use your audio",
              buttonPositive: "Ok",
              buttonNegative: "Cancel",
            }}
          />
          <ImageBackground
            source={require("../../../../assets/images/mask.png")}
            style={styles.maskView}
          >
            <Button
              transparent
              style={styles.backBtn}
              onPress={() => {
                goBack();
              }}
            >
              <ArrowLeft width="32" height="32" color={customColor.white} />
            </Button>
            <View style={styles.ctrlSection}>
              <Text style={styles.cameraMessage}>
                {t("face_verification_setup.camera_message")}
              </Text>
              {loading ? (
                <Spinner color={customColor.white} />
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    takePicture();
                  }}
                  style={styles.buttonOuter}
                >
                  <View style={styles.buttonInner} />
                </TouchableOpacity>
              )}
            </View>
          </ImageBackground>
          <BottomSheetModal ref={ref} index={1} snapPoints={snapPoints}>
            <View style={styles.sheetContainer}>
              <Text style={styles.title}>
                {t("face_verification_setup.face_verification_failed")}
              </Text>
              <View style={styles.term}>
                <FaceIcon />
                <Text style={styles.description}>
                  {t("face_verification_setup.error_message.message_1")}
                </Text>
              </View>
              <View style={styles.term}>
                <GlassIcon />
                <Text style={styles.description}>
                  {t("face_verification_setup.error_message.message_2")}
                </Text>
              </View>
              <View style={styles.term}>
                <BrightnessIcon />
                <Text style={styles.description}>
                  {t("face_verification_setup.error_message.message_3")}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={bottomSheetClose}
              >
                <Text style={styles.buttonText}>{t("got_it")}</Text>
              </TouchableOpacity>
            </View>
          </BottomSheetModal>
        </>
      </Screen>
    </BottomSheetModalProvider>
  );
};

export default FaceRecognition;

import React, { useRef, useMemo, useEffect, useCallback } from "react";
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
import {
  sendFaceSnapshot,
  errorChecked,
} from "../../../../redux/faceRecognitionSlice";
import { RootState } from "../../../../store";

import styles from "./styles";
import customColor from "../../../../theme/customColor";
import ArrowLeft from "../../../../assets/images/arrow-left.svg";
import FaceIcon from "../../../../assets/images/face.svg";
import GlassIcon from "../../../../assets/images/glass.svg";
import BrightnessIcon from "../../../../assets/images/brightness.svg";

const FaceRecognition = () => {
  const camera = useRef<RNCamera>(null);
  const bottomSheet = useRef<BottomSheetModal>(null);
  const { goBack } = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading, error } = useSelector(
    (state: RootState) => state.faceRecognition,
  );
  const snapPoints = useMemo(() => [0, "50%"], []);

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 1, base64: true };
      const data = await camera.current?.takePictureAsync(options);
      // TODO: change dispatch when integrate API
      dispatch(sendFaceSnapshot(data?.uri));
    }
  };

  const bottomSheetExtend = useCallback(() => {
    bottomSheet?.current?.present();
  }, []);

  const bottomSheetClose = useCallback(() => {
    bottomSheet?.current?.close();
  }, []);

  const checkError = () => {
    bottomSheetClose();
    dispatch(errorChecked());
  };

  useEffect(() => {
    if (error) {
      bottomSheetExtend();
    }
  }, [error]);

  return (
    <BottomSheetModalProvider>
      <Screen innerStyle={styles.fullScreen}>
        <>
          <RNCamera
            ref={camera}
            faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.accurate}
            faceDetectionLandmarks={
              RNCamera.Constants.FaceDetection.Landmarks.all
            }
            faceDetectionClassifications={
              RNCamera.Constants.FaceDetection.Classifications.all
            }
            style={styles.container}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.auto}
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
          <BottomSheetModal ref={bottomSheet} index={1} snapPoints={snapPoints}>
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
                onPress={() => {
                  checkError();
                }}
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

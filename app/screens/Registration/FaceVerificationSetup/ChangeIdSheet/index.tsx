import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { Button, View, Text } from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";

import { SIGN_UP } from "../../../../constants";

import { sheetStyles } from "../styles";

const ChangeIdSheet = React.forwardRef((_, ref: any) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const snapPoints = useMemo(() => [0, 300], []);

  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      handleComponent={null}
    >
      <View style={sheetStyles.container}>
        <Text style={sheetStyles.title}>{t("change_id_sheet.title")}</Text>
        <Text style={sheetStyles.description}>
          {t("change_id_sheet.description")}
        </Text>
        <View style={sheetStyles.buttonContainer}>
          <Button
            primary
            rounded
            block
            style={sheetStyles.button}
            onPress={() => ref.current?.close()}
          >
            <Text>{t("change_id_sheet.no").toUpperCase()}</Text>
          </Button>
          <Button
            primary
            rounded
            bordered
            block
            onPress={() => {
              navigate(SIGN_UP);
              return ref.current?.close();
            }}
          >
            <Text>{t("change_id_sheet.yes").toUpperCase()}</Text>
          </Button>
          <Text style={sheetStyles.note}>{t("change_id_sheet.note")}</Text>
        </View>
      </View>
    </BottomSheet>
  );
});

export default ChangeIdSheet;

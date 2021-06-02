import React from "react";
import { View } from "native-base";
import { RouteProp } from "@react-navigation/native";
import Pdf from "react-native-pdf";
import Screen from "../../components/Screen";
import { RootStackParamList } from "../../navigations";
import { PDF_VIEWER } from "../../constants";

import styles from "./styles";

type PdfViewerRouteProp = RouteProp<RootStackParamList, typeof PDF_VIEWER>;

type Props = {
  route: PdfViewerRouteProp;
};

const PdfViewer = ({ route }: Props) => {
  const { uri } = route.params;
  const source = { uri, cache: true };

  return (
    <Screen isLoading={false} hasHeader={true} isNonScrolling={false}>
      <View>
        <Pdf source={source} style={styles.viewer} />
      </View>
    </Screen>
  );
};

export default PdfViewer;

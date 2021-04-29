import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Root } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { setHasInternetConnection } from "./redux/settingSlice";
import { fetchProfile } from "./redux/profileSlice";
import Loader from "./components/Loader";
import SettingsOverlay from "./components/SettingsOverlay";
import RootNavigation from "./navigations";
import * as GlobalNavigation from "./navigations/GlobalNavigation";
import { RootState } from "./store";
import PinCodePrompt from "./components/PinCodePrompt";

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const init = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });

    NetInfo.addEventListener(state =>
      dispatch(setHasInternetConnection(state.isConnected || false)),
    );

    setIsReady(true);
  };

  // Initialize the app
  useEffect(() => {
    init();
  }, []);

  // Upon authentication fetch user profile
  useEffect(() => {
    if (token) {
      dispatch(fetchProfile());
    }
  }, [token]);

  if (!isReady) {
    return <Loader />;
  }

  return (
    <>
      <PinCodePrompt />
      <SettingsOverlay />
      <NavigationContainer
        ref={ref => GlobalNavigation.setGlobalNavigator(ref)}
      >
        <Root>
          <RootNavigation />
        </Root>
      </NavigationContainer>
    </>
  );
};

export default App;

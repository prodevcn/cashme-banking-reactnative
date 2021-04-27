import React, { Component, ComponentType } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";
import * as Font from "expo-font";
// import * as Notifications from "expo-notifications";
import { Ionicons } from "@expo/vector-icons";
import notificationSlice, {
  registerForPushNotifications,
} from "./redux/notificationSlice";
import { setHasInternetConnection } from "./redux/settingSlice";
import Loader from "./components/Loader";
import SettingsOverlay from "./components/SettingsOverlay";
import { AppDispatch, RootState } from "./store";
import RootNavigation from "./navigations";
import * as GlobalNavigation from "./navigations/GlobalNavigation";

interface AppProps {
  expoPushToken: string;
  notificationSuccess: Function;
  registerForPushNotifications: Function;
  setHasInternetConnection: Function;
}

interface AppState {
  isReady: boolean;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    // Load Fonts
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });

    NetInfo.addEventListener(state => {
      this.props.setHasInternetConnection(state.isConnected);
    });

    this.setState({ isReady: true });

    // Subscribe for notifications
    // TODO: Uncomment once notification server is set up
    // await this.props.registerForPushNotifications();
    // if (this.props.expoPushToken) {
    //   Notifications.addNotificationReceivedListener(notification => {
    //     this.props.notificationSuccess({ notification });
    //   });

    //   Notifications.addNotificationResponseReceivedListener(response => {
    //     // onNotificationClickHandler
    //   });
    // }
  }

  render() {
    const { isReady } = this.state;

    if (!isReady) {
      return <Loader />;
    }

    return (
      <>
        <SettingsOverlay />
        <NavigationContainer
          ref={ref => GlobalNavigation.setGlobalNavigator(ref)}
        >
          <RootNavigation />
        </NavigationContainer>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    expoPushToken: state.notification.expoPushToken,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    registerForPushNotifications: () =>
      dispatch(registerForPushNotifications()),
    notificationSuccess: () =>
      dispatch(notificationSlice.actions.notificationSuccess),
    setHasInternetConnection: (hasConnection: boolean) =>
      dispatch(setHasInternetConnection(hasConnection)),
  };
};

export default compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
)(App);

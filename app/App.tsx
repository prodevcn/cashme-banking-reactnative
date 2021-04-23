import React, { Component, ComponentType } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
// import * as Notifications from "expo-notifications";
import { Ionicons } from "@expo/vector-icons";
import { AppDispatch, RootState } from "./store";
import notificationSlice, {
  registerForPushNotifications,
} from "./redux/notificationSlice";
import Loader from "./components/Loader";
import RootNavigation, { navigationRef } from "./navigations";

interface AppProps {
  expoPushToken: string;
  notificationSuccess: Function;
  registerForPushNotifications: Function;
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
      <NavigationContainer ref={navigationRef}>
        <RootNavigation />
      </NavigationContainer>
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
  };
};

export default compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
)(App);

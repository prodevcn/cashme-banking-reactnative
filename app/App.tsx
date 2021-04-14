import React, { Component, ComponentType } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import * as Notifications from "expo-notifications";
import { Ionicons } from "@expo/vector-icons";
import { AppDispatch } from "./store";
import notificationSlice, {
  registerForPushNotifications,
} from "./redux/notificationSlice";
import Loader from "./components/Loader";
import RootNavigation from "./navigations";

interface AppProps {
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

    // Subscribe for notifications
    this.props.registerForPushNotifications().then(() => {
      Notifications.addNotificationReceivedListener(notification => {
        this.props.notificationSuccess({ notification });
      });

      Notifications.addNotificationResponseReceivedListener(response => {
        // onNotificationClickHandler
      });
    });

    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state;

    // Loading case
    if (!isReady) {
      return <Loader />;
    }

    return (
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    );
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    registerForPushNotifications: () => dispatch(registerForPushNotifications),
    notificationSuccess: () =>
      dispatch(notificationSlice.actions.notificationSuccess),
  };
};

export default compose<ComponentType>(connect(null, mapDispatchToProps))(App);

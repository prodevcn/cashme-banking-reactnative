import "react-native-gesture-handler";
import * as React from "react";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Root, StyleProvider } from "native-base";
import getTheme from './native-base-theme/components';
import store from "./app/store";
import i18n from "./app/i18n";
import App from "./app/App";

const RootComponent = () => (
  <StyleProvider  style={getTheme()}>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <SafeAreaProvider>
          <Root>
            <App />
          </Root>
        </SafeAreaProvider>
      </I18nextProvider>
    </Provider>
  </StyleProvider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(RootComponent);

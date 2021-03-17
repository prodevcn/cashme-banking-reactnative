import 'react-native-gesture-handler';
import * as React from "react";
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import store from './app/store';
import App from './app/App';
import i18n from './app/i18n';

const Index = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Index);

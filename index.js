import * as React from "react";
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from './app/store';
import App from './app/App';

const RootComponent = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  </Provider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(RootComponent);

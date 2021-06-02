import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NonAuthenticatedScreens } from "./bottomTab";
import {
  noConnectionScreen,
  authScreens,
  resetPinScreen,
  securitySettingsScreen,
  productScreens,
  getLoan,
  loanOffer,
  personalInfoScreen,
  smsSignatureScreen,
  pdfViewerScreen,
} from "./routes";
import { GET_LOAN, PDF_VIEWER } from "../constants";

export type RootStackParamList = { [name: string]: undefined } & {
  [PDF_VIEWER]: { uri: string };
  [GET_LOAN]: { proposalIndex: number };
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

class RootNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={NonAuthenticatedScreens}
          options={{ headerShown: false }}
        />

        {authScreens.map((authScreen, index) => (
          <Stack.Screen
            key={`${authScreen.name}_${index}`}
            name={authScreen.name}
            component={authScreen.component}
            options={authScreen.options}
          />
        ))}

        {productScreens.map((screen, index) => (
          <Stack.Screen
            key={`${screen.name}_${index}`}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}

        <Stack.Screen
          name={getLoan.name}
          component={getLoan.component}
          options={getLoan.options}
        />

        <Stack.Screen
          name={loanOffer.name}
          component={loanOffer.component}
          options={loanOffer.options}
        />

        <Stack.Screen
          name={noConnectionScreen.name}
          component={noConnectionScreen.component}
          options={noConnectionScreen.options}
        />

        <Stack.Screen
          name={resetPinScreen.name}
          component={resetPinScreen.component}
          options={resetPinScreen.options}
        />

        <Stack.Screen
          name={securitySettingsScreen.name}
          component={securitySettingsScreen.component}
          options={securitySettingsScreen.options}
        />

        <Stack.Screen
          name={personalInfoScreen.name}
          component={personalInfoScreen.component}
          options={personalInfoScreen.options}
        />

        <Stack.Screen
          name={smsSignatureScreen.name}
          component={smsSignatureScreen.component}
          options={smsSignatureScreen.options}
        />

        <Stack.Screen
          name={pdfViewerScreen.name}
          component={pdfViewerScreen.component}
          options={pdfViewerScreen.options}
        />
      </Stack.Navigator>
    );
  }
}

export default RootNavigation;

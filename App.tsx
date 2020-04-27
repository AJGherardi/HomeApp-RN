import "react-native-gesture-handler";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { WelcomePage } from "./src/pages/Welcome";
import { AddDeviceSplashPage } from "./src/pages/AddFirstDevice";
import { AvailableDevicesPage } from "./src/pages/AvailableDevices";
import { AddDevicePage } from "./src/pages/AddDevice";

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
        <PaperProvider>
          <RootStack.Navigator initialRouteName="Welcome">
            <RootStack.Screen
              name="Welcome"
              component={WelcomePage}
              options={{
                headerShown: false,
                transitionSpec: {
                  open: TransitionSpecs.TransitionIOSSpec,
                  close: TransitionSpecs.TransitionIOSSpec,
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
            <RootStack.Screen
              name="AddDeviceSplash"
              component={AddDeviceSplashPage}
              options={{
                headerShown: false,
                transitionSpec: {
                  open: TransitionSpecs.TransitionIOSSpec,
                  close: TransitionSpecs.TransitionIOSSpec,
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
            <RootStack.Screen
              name="AvailableDevices"
              component={AvailableDevicesPage}
              options={{
                headerShown: false,
                transitionSpec: {
                  open: TransitionSpecs.TransitionIOSSpec,
                  close: TransitionSpecs.TransitionIOSSpec,
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
            <RootStack.Screen
              name="AddDevice"
              component={AddDevicePage}
              options={{
                headerShown: false,
                transitionSpec: {
                  open: TransitionSpecs.TransitionIOSSpec,
                  close: TransitionSpecs.TransitionIOSSpec,
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
          </RootStack.Navigator>
        </PaperProvider>
    </NavigationContainer>
  );
}

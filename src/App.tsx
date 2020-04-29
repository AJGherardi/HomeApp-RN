import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { WelcomePage } from "./pages/Welcome";
import { AddDeviceSplashPage } from "./pages/AddFirstDevice";
import { AvailableDevicesPage } from "./pages/AvailableDevices";
import { AddDevicePage } from "./pages/AddDevice";
import { HomePage } from "./pages/Home";
import { DevicesPage } from "./pages/Devices";

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
            name="Home"
            component={HomePage}
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
            name="Devices"
            component={DevicesPage}
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

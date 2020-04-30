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
import { GroupsPage } from "./pages/Group";

const RootStack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <RootStack.Navigator initialRouteName="Welcome" screenOptions={{
          cardStyle: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          }
        }}>
          <RootStack.Screen
            name="Welcome"
            component={WelcomePage}
            options={screenOptions}
          />
          <RootStack.Screen
            name="Home"
            component={HomePage}
            options={screenOptions}
          />
          <RootStack.Screen
            name="Devices"
            component={DevicesPage}
            options={screenOptions}
          />
          <RootStack.Screen
            name="Groups"
            component={GroupsPage}
            options={screenOptions}
          />
          <RootStack.Screen
            name="AddDeviceSplash"
            component={AddDeviceSplashPage}
            options={screenOptions}
          />
          <RootStack.Screen
            name="AvailableDevices"
            component={AvailableDevicesPage}
            options={screenOptions}
          />
          <RootStack.Screen
            name="AddDevice"
            component={AddDevicePage}
            options={screenOptions}
          />
        </RootStack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

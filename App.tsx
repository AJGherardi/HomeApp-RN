import "react-native-gesture-handler";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { HomePage } from "./src/pages/Home";
import { AddDeviceSplashPage } from "./src/pages/AddFirstDevice";
import { AvailableDevicesPage } from "./src/pages/AvailableDevices";
import { AddDevicePage } from "./src/pages/AddDevice";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: "http://192.168.1.204:8080/graphql",
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
});

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <PaperProvider>
          <RootStack.Navigator initialRouteName="Home">
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
      </ApolloProvider>
    </NavigationContainer>
  );
}

import "react-native-gesture-handler";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, View, StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { HomePage } from "./src/pages/Home";
import { AddFirstDevicePage } from "./src/pages/AddFirstDevice";

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
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="AddFirstDevice"
              component={AddFirstDevicePage}
              options={{ headerShown: false }}
            />
          </RootStack.Navigator>
        </PaperProvider>
      </ApolloProvider>
    </NavigationContainer>
  );
}

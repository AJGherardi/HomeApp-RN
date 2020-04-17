import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider as PaperProvider, Button } from "react-native-paper";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { styles } from "../styles/Styles";

type HomeNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type HomeRouteProp = RouteProp<RootStackParamList, "Home">;

type HomeProps = {
  route: HomeRouteProp;
  navigation: HomeNavigationProp;
};

export function HomePage({ route, navigation }: HomeProps) {
  return (
    <View style={styles.page}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.detailsView}>
        <Text style={styles.homeText}>Home</Text>
        <Text style={styles.byText}>by</Text>
        <Text style={styles.nameText}>alexander gherardi</Text>
      </View>
      <View style={styles.nextView}>
        <Button
          contentStyle={styles.nextButton}
          color="white"
          mode="contained"
          onPress={() => {
            navigation.navigate("Details");
          }}
        >
          Next
        </Button>
      </View>
    </View>
  );
}

import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text, View, StatusBar } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../styles/Styles";
import { RootStackParamList } from "./Navigation";

type WelcomeNavigationProp = StackNavigationProp<RootStackParamList, "Welcome">;

type WelcomeRouteProp = RouteProp<RootStackParamList, "Welcome">;

type WelcomeProps = {
  route: WelcomeRouteProp;
  navigation: WelcomeNavigationProp;
};

export function WelcomePage({ route, navigation }: WelcomeProps) {
  return (
    <View style={styles.page}>
      <View style={styles.homeView}>
        <Text style={styles.homeText}>Home</Text>
        <Text style={styles.byText}>by</Text>
        <Text style={styles.nameText}>Alexander Gherardi</Text>
      </View>
      <View style={styles.nextView}>
        <Button
          contentStyle={styles.nextButton}
          color="white"
          mode="contained"
          onPress={() => {
            navigation.navigate("AddHubSplash");
          }}
        >
          Next
          </Button>
      </View>
    </View>
  );
}


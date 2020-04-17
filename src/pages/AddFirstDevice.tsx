import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { styles } from "../styles/Styles";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Provider as PaperProvider, Button } from "react-native-paper";

type AddFirstDeviceNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AddFirstDevice"
>;

type AddFirstDeviceRouteProp = RouteProp<RootStackParamList, "AddFirstDevice">;

type AddFirstDeviceProps = {
  route: AddFirstDeviceRouteProp;
  navigation: AddFirstDeviceNavigationProp;
};

export function AddFirstDevicePage({ route, navigation }: AddFirstDeviceProps) {
  return (
    <View style={styles.page}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.detailsView}>
        <Text style={styles.titleText}>Add A Device</Text>
        <View style={styles.spaceing}></View>
        <Image source={require("../../assets/outlet.png")} />
      </View>
      <View style={styles.nextView}>
        <Button
          contentStyle={styles.nextButton}
          color="white"
          mode="contained"
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          Next
        </Button>
      </View>
    </View>
  );
}

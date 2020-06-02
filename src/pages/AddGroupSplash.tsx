import React from "react";
import { Text, View, StatusBar, Image } from "react-native";
import { styles } from "../styles/Styles";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "react-native-paper";
import { RootStackParamList } from "./Navigation";
import OutletSvg from "../svg/Outlet";

type AddGroupSplashNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AddGroupSplash"
>;

type AddGroupSplashRouteProp = RouteProp<
  RootStackParamList,
  "AddGroupSplash"
>;

type AddGroupSplashProps = {
  route: AddGroupSplashRouteProp;
  navigation: AddGroupSplashNavigationProp;
};

export function AddGroupSplashPage({ route, navigation }: AddGroupSplashProps) {
  return (
    <View style={styles.page}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Add A Group</Text>
      </View>
      <View style={styles.centerView}>
        <OutletSvg />
      </View>
      <View style={styles.nextView}>
        <Button
          contentStyle={styles.nextButton}
          color="white"
          mode="contained"
          onPress={() => {
            navigation.navigate("AddGroup");
          }}
        >
          Next
          </Button>
      </View>
    </View>
  );
}

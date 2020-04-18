import React from "react";
import { Text, View, StatusBar, Image, FlatList } from "react-native";
import { styles } from "../styles/Styles";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "react-native-paper";

type AvailableDevicesNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AddFirstDevice"
>;

type AvailableDevicesRouteProp = RouteProp<
  RootStackParamList,
  "AddFirstDevice"
>;

type AvailableDevicesProps = {
  route: AvailableDevicesRouteProp;
  navigation: AvailableDevicesNavigationProp;
};

export function AvailableDevicesPage({
  route,
  navigation,
}: AvailableDevicesProps) {
  return (
    <View style={styles.page}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Find your Device</Text>
        <View style={styles.photoView}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.titleText}>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View style={styles.nextView}></View>
    </View>
  );
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

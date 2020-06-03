import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { styles } from "../styles/Styles";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableRipple, ActivityIndicator } from "react-native-paper";
import { Service, Device } from "react-native-ble-plx";
import { RootStackParamList } from "./Navigation";
import { availableDevices } from "../api/AvailableDevices";
import SInfo from "react-native-sensitive-info"

type AvailableDevicesNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AvailableDevices"
>;

type AvailableDevicesRouteProp = RouteProp<
  RootStackParamList,
  "AvailableDevices"
>;

type AvailableDevicesProps = {
  route: AvailableDevicesRouteProp;
  navigation: AvailableDevicesNavigationProp;
};

export function AvailableDevicesPage({ route, navigation }: AvailableDevicesProps) {
  const [loading, setLoading] = useState(true);
  const [devices, setDevices] = useState<readonly string[]>([]);

  useEffect(() => {
    async function findDevices() {
      var host = await SInfo.getItem("host", {})
      var webKey = await SInfo.getItem("webKey", {})
      var nodes = await availableDevices(host, webKey)
      setDevices(nodes.availableDevices)
      setLoading(false)
    }
    findDevices()
    return () => {
      setLoading(true)
      setDevices([])
    }
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Find your Device</Text>
      </View>
      <View style={styles.centerView}>
        {loading ? <ActivityIndicator color="#ffffff" size="large" /> : (
          <FlatList
            style={styles.listView}
            data={devices}
            renderItem={({ item }) => (
              <TouchableRipple
                style={styles.listItem}
                borderless={true}
                onPress={() => {
                  navigation.navigate("AddDevice", { device: item, group: route.params.group });
                }}
                rippleColor="#ffffff"
              >
                <Text style={styles.listItemText}>{item}</Text>
              </TouchableRipple>
            )}
            keyExtractor={(item) => item}
          />
        )}
      </View>
      <View style={styles.nextView}></View>
    </View>
  );
}

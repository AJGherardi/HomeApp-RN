import React, { useState, useEffect } from "react";
import { Text, View, StatusBar, FlatList } from "react-native";
import { styles } from "../styles/Styles";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableRipple, ActivityIndicator } from "react-native-paper";
import { Service, Device } from "react-native-ble-plx";
import { findDevices, stopDeviceScan } from "../ble/Ble";
import { RootStackParamList } from "./Navigation";

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
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    findDevices(async (error, device) => {
      if (error) {
        return;
      }
      if (device != null) {
        setLoading(false)
        setDevices([device])
      }
    });
    return () => {
      stopDeviceScan();
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
                  navigation.navigate("AddDevice", { device: item });
                }}
                rippleColor="#ffffff"
              >
                <Text style={styles.listItemText}>{item.id}</Text>
              </TouchableRipple>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
      <View style={styles.nextView}></View>
    </View>
  );
}

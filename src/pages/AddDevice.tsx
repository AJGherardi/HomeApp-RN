import React, { useState } from "react";
import { Text, View, StatusBar, Image } from "react-native";
import { Button } from "react-native-paper";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "../styles/Styles";
import { RootStackParamList } from "./Navigation";
import { provisionDevice } from "../ble/Ble";
import { getProvData } from "../api/GetProvData";
import { addGroup } from "../api/AddGroup";
import { addDevice } from "../api/AddDevice";

type AddDeviceNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AddDevice"
>;

type AddDeviceRouteProp = RouteProp<RootStackParamList, "AddDevice">;

type AddDeviceProps = {
  route: AddDeviceRouteProp;
  navigation: AddDeviceNavigationProp;
};

export function AddDevicePage({ route, navigation }: AddDeviceProps) {
  const [loading, setLoading] = useState(false);
  
  return (
    <View style={styles.page}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Add Device</Text>
      </View>
      <View style={styles.centerView}>
        <View style={styles.rangeView}>
          <View style={styles.upperRangeView}>
            <Image source={require("../../assets/range.png")} />
          </View>
          <View style={styles.lowerRangeView}>
            <Text style={styles.rangeText}>
              Get within 2-4 ft of your device
              </Text>
          </View>
        </View>
      </View>
      <View style={styles.nextView}>
        <Button
          contentStyle={styles.nextButton}
          color="#FFEE58"
          mode="contained"
          loading={loading}
          onPress={async () => {
            setLoading(true)
            var provData = (await getProvData("192.168.1.204")).getProvData
            var devKey = await provisionDevice(
              route.params.device,
              provData.networkKey,
              provData.keyIndex,
              provData.flags,
              provData.ivIndex,
              provData.nextDevAddr,
            )
            var device = await addDevice("192.168.1.204", "test", devKey, route.params.group)
            navigation.navigate("App")
          }}
        >
          Add
          </Button>
      </View>
    </View>
  );
}


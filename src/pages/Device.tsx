import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, StatusBar } from "react-native";
import { styles } from "../styles/Styles";

type DeviceNavigationProp = StackNavigationProp<RootStackParamList, "Device">;

type DeviceRouteProp = RouteProp<RootStackParamList, "Device">;

type DeviceProps = {
    route: DeviceRouteProp;
    navigation: DeviceNavigationProp;
};

export function DevicePage({ route, navigation }: DeviceProps) {
    return (
        <View style={styles.page}>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />
        </View>
    )
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

import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, StatusBar, Text, Image } from "react-native";
import { styles } from "../styles/Styles";
import { TouchableRipple } from "react-native-paper";

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
            <View style={styles.deviceUpperView}>
                <Image source={require("../../assets/plug.png")} />
                <View style={styles.deviceTextView}>
                    <Text style={styles.deviceText}>Left Outlet</Text>
                    <Text style={styles.deviceSubtext}>Living Room</Text>
                </View>
            </View>
            <View style={styles.deviceLowerView}>
                <View style={styles.deviceProps}>

                </View>
                <View style={styles.deviceProps}>

                </View>
            </View>
        </View>
    )
}
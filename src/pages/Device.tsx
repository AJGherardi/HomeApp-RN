import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/Styles";
import { Button } from "react-native-paper";
import { RootStackParamList } from "./Navigation";

type DeviceNavigationProp = StackNavigationProp<RootStackParamList, "Device">;

type DeviceRouteProp = RouteProp<RootStackParamList, "Device">;

type DeviceProps = {
    route: DeviceRouteProp;
    navigation: DeviceNavigationProp;
};

export function DevicePage({ route, navigation }: DeviceProps) {
    const [onoff, setOnoff] = useState("off");
    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.page}>
            <View style={styles.deviceUpperView}>
                <Image source={require("../../assets/plug.png")} />
                <View style={styles.deviceTextView}>
                    <Text style={styles.deviceText}>Left Outlet</Text>
                    <Text style={styles.deviceSubtext}>Living Room</Text>
                </View>
            </View>
            <View style={styles.deviceLowerView}>
                <View style={styles.deviceProps}>
                    <Image source={require("../../assets/on.png")} />
                    <View>
                        <Text style={styles.devicePropText}>State</Text>
                        <Button
                            color="black"
                            mode="contained"
                            loading={loading}
                            disabled={loading}
                            onPress={() => {
                                if (onoff == "off") {
                                    setLoading(true)
                                    setOnoff("on")
                                } else {
                                    setLoading(true)
                                    setOnoff("off")
                                }
                            }}
                        >
                            {onoff}
                        </Button>
                    </View>
                </View>
                <View style={{ flex: 1 }} />
            </View>
        </View>
    )
}

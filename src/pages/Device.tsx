import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/Styles";
import { Button } from "react-native-paper";
import { RootStackParamList } from "./Navigation";
import { setState } from "../api/SetState";
import { getState } from "../api/GetState";

type DeviceNavigationProp = StackNavigationProp<RootStackParamList, "Device">;

type DeviceRouteProp = RouteProp<RootStackParamList, "Device">;

type DeviceProps = {
    route: DeviceRouteProp;
    navigation: DeviceNavigationProp;
};

export function DevicePage({ route, navigation }: DeviceProps) {
    const [onoff, setOnoff] = useState<string>();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function getDevice() {
            var state = await getState("192.168.1.204", route.params.devAddr, 0)
            setLoading(false)
            if (state.getState.state == "AA==") {
                setOnoff("off")
            }
            setOnoff("on")
        }
        getDevice()
        return () => {
            setLoading(true)
        }
    }, []);
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
                            onPress={async () => {
                                if (onoff == "off") {
                                    setLoading(true)
                                    await setState("192.168.1.204", route.params.devAddr, 0, "AQ==")
                                    setOnoff("on")
                                    setLoading(false)
                                } else {
                                    setLoading(true)
                                    await setState("192.168.1.204", route.params.devAddr, 0, "AA==")
                                    setOnoff("off")
                                    setLoading(false)
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

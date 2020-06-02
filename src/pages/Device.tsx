import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/Styles";
import { Button, IconButton, Portal, Dialog } from "react-native-paper";
import { RootStackParamList } from "./Navigation";
import { setState } from "../api/SetState";
import { getState } from "../api/GetState";
import { removeDevice } from "../api/RemoveDevice";
import SInfo from "react-native-sensitive-info"

type DeviceNavigationProp = StackNavigationProp<RootStackParamList, "Device">;

type DeviceRouteProp = RouteProp<RootStackParamList, "Device">;

type DeviceProps = {
    route: DeviceRouteProp;
    navigation: DeviceNavigationProp;
};

export function DevicePage({ route, navigation }: DeviceProps) {
    const [onoff0, setOnoff0] = useState<string>("off");
    const [onoff1, setOnoff1] = useState<string>("off");
    const [loading, setLoading] = useState(true);
    const [resetVisable, setResetVisable] = useState(false);

    useEffect(() => {
        async function getDevice() {
            var host = await SInfo.getItem("host", {})
            var state0 = await getState(host, route.params.devAddr, 0)
            setLoading(true)
            if (state0.getState.state == "AA==") {
                setOnoff0("off")
            }
            else {
                setOnoff0("on")
            }
            var state1 = await getState(host, route.params.devAddr, 0)
            if (state1.getState.state == "AA==") {
                setOnoff1("off")
            }
            else {
                setOnoff1("on")
            }
            setLoading(false)
        }
        getDevice()
        return () => {
            setLoading(true)
        }
    }, []);
    return (
        <View style={styles.page}>
            <Portal>
                <Dialog
                    visible={resetVisable}
                    onDismiss={() => { setResetVisable(false) }}
                >
                    <Dialog.Content>
                        <Text style={styles.resetDialogText}>Click to reset and remove this device</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button
                            color="black"
                            onPress={() => {
                                setResetVisable(false)
                            }}
                        >
                            cancel
                        </Button>
                        <Button
                            color="#D32F2F"
                            onPress={async () => {
                                setResetVisable(false)
                                var host = await SInfo.getItem("host", {})
                                await removeDevice(host, route.params.devAddr)
                                navigation.navigate("Home")
                            }}
                        >
                            reset
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <View style={styles.topOptionsView}>
                <IconButton color="white" icon="chevron-left" size={42} onPress={() => {
                    navigation.goBack()
                }} />
                <IconButton color="white" icon="minus-circle-outline" size={42} onPress={() => {
                    setResetVisable(true)
                }} />
            </View>
            <View style={styles.deviceUpperView}>
                <Image source={require("../../assets/plug.png")} />
                <View style={styles.deviceTextView}>
                    <Text style={styles.deviceText}>{route.params.devName}</Text>
                    <Text style={styles.deviceSubtext}>Smart Plug</Text>
                </View>
            </View>
            <View style={styles.deviceLowerView}>
                <View style={styles.deviceProps}>
                    <Image source={require("../../assets/on.png")} />
                    <View>
                        <Text style={styles.devicePropText}>Plug 1</Text>
                        <Button
                            color="black"
                            mode="contained"
                            loading={loading}
                            disabled={loading}
                            onPress={async () => {
                                console.log(route.params.devAddr)
                                var host = await SInfo.getItem("host", {})
                                if (onoff0 == "off") {
                                    setLoading(true)
                                    await setState(host, route.params.devAddr, 0, "AQ==")
                                    setOnoff0("on")
                                    setLoading(false)
                                } else {
                                    setLoading(true)
                                    await setState(host, route.params.devAddr, 0, "AA==")
                                    setOnoff0("off")
                                    setLoading(false)
                                }
                            }}
                        >
                            {onoff0}
                        </Button>
                    </View>
                </View>
                <View style={styles.deviceProps}>
                    <Image source={require("../../assets/on.png")} />
                    <View>
                        <Text style={styles.devicePropText}>Plug 2</Text>
                        <Button
                            color="black"
                            mode="contained"
                            loading={loading}
                            disabled={loading}
                            onPress={async () => {
                                var host = await SInfo.getItem("host", {})
                                if (onoff1 == "off") {
                                    setLoading(true)
                                    await setState(host, route.params.devAddr, 1, "AQ==")
                                    setOnoff1("on")
                                    setLoading(false)
                                } else {
                                    setLoading(true)
                                    await setState(host, route.params.devAddr, 1, "AA==")
                                    setOnoff1("off")
                                    setLoading(false)
                                }
                            }}
                        >
                            {onoff1}
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    )
}

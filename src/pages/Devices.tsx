import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { View, Image, FlatList } from "react-native";
import { Text, TouchableRipple, ActivityIndicator } from "react-native-paper";
import { styles } from "../styles/Styles";
import { RootStackParamList } from "./Navigation";
import { listDevices } from "../api/ListDevices";
import { ListDevicesQueryResponse } from "src/api/__generated__/ListDevicesQuery.graphql";

type DevicesNavigationProp = StackNavigationProp<RootStackParamList, "Devices">;

type DevicesRouteProp = RouteProp<RootStackParamList, "Devices">;

type DevicesProps = {
    route: DevicesRouteProp;
    navigation: DevicesNavigationProp;
};

export function DevicesPage({ route, navigation }: DevicesProps) {
    const [loading, setLoading] = useState(true);
    const [devices, setDevices] = useState<ListDevicesQueryResponse>();

    useEffect(() => {
        async function getDevice() {
            var devices = await listDevices("192.168.1.204")
            setLoading(false)
            setDevices(devices)
        }
        getDevice()
        return () => {
            setLoading(true)
        }
    }, []);

    return (
        <View style={styles.page}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Devices</Text>
            </View>
            <View style={styles.centerView}>
                {loading ? <ActivityIndicator color="#ffffff" size="large" /> : (
                    <FlatList
                        style={styles.listView}
                        contentContainerStyle={styles.listContent}
                        data={devices?.listDevices}
                        renderItem={({ item }) => (
                            <TouchableRipple
                                style={styles.item}
                                borderless={true}
                                onPress={() => {
                                    navigation.navigate("Device", {devAddr: item.addr});
                                }}
                                rippleColor="#ffffff"
                            >
                                <View>
                                    <Image style={styles.itemView}
                                        source={require("../../assets/plug.png")} />
                                    <Text style={styles.itemText}>{item.name}</Text>
                                </View>
                            </TouchableRipple>
                        )}
                        numColumns={2}
                        keyExtractor={(item) => item.addr}
                    />
                )}
            </View>
        </View>
    )
}
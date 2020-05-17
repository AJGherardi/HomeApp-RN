import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { View, StatusBar, Image, FlatList } from "react-native";
import { Text, TouchableRipple, Appbar, ActivityIndicator } from "react-native-paper";
import { styles } from "../styles/Styles";
import { RootStackParamList } from "./Navigation";
import { listGroups } from "../api/ListGroups";
import { ListDevicesByGroupQueryResponse } from "../api/__generated__/ListDevicesByGroupQuery.graphql";
import { listDevicesByGroup } from "../api/ListDevicesByGroup";

type GroupNavigationProp = StackNavigationProp<RootStackParamList, "Group">;

type GroupRouteProp = RouteProp<RootStackParamList, "Group">;

type GroupProps = {
    route: GroupRouteProp;
    navigation: GroupNavigationProp;
};

export function GroupPage({ route, navigation }: GroupProps) {
    const [loading, setLoading] = useState(true);
    const [devices, setDevices] = useState<ListDevicesByGroupQueryResponse>();

    useEffect(() => {
        async function getDevice() {
            var devices = await listDevicesByGroup("192.168.1.204", route.params.addr)
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
                <Text style={styles.titleText}>{route.params.name}</Text>
            </View>
            <View style={styles.centerView}>
                {loading ? <ActivityIndicator color="#ffffff" size="large" /> : (
                    <FlatList
                        style={styles.listView}
                        contentContainerStyle={styles.listContent}
                        data={devices?.listDevicesByGroup}
                        renderItem={({ item }) => (
                            <TouchableRipple
                                style={styles.item}
                                borderless={true}
                                onPress={() => {
                                    navigation.navigate("Device", { devAddr: item.addr });
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
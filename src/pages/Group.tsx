import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { View, Image, FlatList } from "react-native";
import { Text, TouchableRipple, ActivityIndicator, IconButton, Portal, Dialog, Button } from "react-native-paper";
import { styles } from "../styles/Styles";
import { RootStackParamList } from "./Navigation";
import { ListDevicesByGroupQueryResponse } from "../api/__generated__/ListDevicesByGroupQuery.graphql";
import { listDevicesByGroup } from "../api/ListDevicesByGroup";
import { removeGroup } from "../api/RemoveGroup";
import SInfo from "react-native-sensitive-info"
import PlugSvg from "../svg/Plug";

type GroupNavigationProp = StackNavigationProp<RootStackParamList, "Group">;

type GroupRouteProp = RouteProp<RootStackParamList, "Group">;

type GroupProps = {
    route: GroupRouteProp;
    navigation: GroupNavigationProp;
};

export function GroupPage({ route, navigation }: GroupProps) {
    const [loading, setLoading] = useState(true);
    const [devices, setDevices] = useState<ListDevicesByGroupQueryResponse>();
    const [resetVisable, setResetVisable] = useState(false);

    useEffect(() => {
        async function getDevice() {
            var host = await SInfo.getItem("host", {})
            var devices = await listDevicesByGroup(host, route.params.addr)
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
            <Portal>
                <Dialog
                    visible={resetVisable}
                    onDismiss={() => { setResetVisable(false) }}
                >
                    <Dialog.Content>
                        <Text style={styles.resetDialogText}>Click to remove this group</Text>
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
                                await removeGroup(host, route.params.addr)
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
                                    navigation.navigate("Device", { devAddr: item.addr, devName: item.name });
                                }}
                                rippleColor="#ffffff"
                            >
                                <View>
                                    <PlugSvg style={styles.itemView} />
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
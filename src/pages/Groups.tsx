import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { View, StatusBar, Image, FlatList } from "react-native";
import { Text, TouchableRipple, Appbar, ActivityIndicator } from "react-native-paper";
import { styles } from "../styles/Styles";
import { RootStackParamList } from "./Navigation";
import { ListGroupsQueryResponse } from "../api/__generated__/ListGroupsQuery.graphql";
import { listGroups } from "../api/ListGroups";

type GroupsNavigationProp = StackNavigationProp<RootStackParamList, "Groups">;

type GroupsRouteProp = RouteProp<RootStackParamList, "Groups">;

type GroupsProps = {
    route: GroupsRouteProp;
    navigation: GroupsNavigationProp;
};

export function GroupsPage({ route, navigation }: GroupsProps) {
    const [loading, setLoading] = useState(true);
    const [groups, setGroups] = useState<ListGroupsQueryResponse>();

    useEffect(() => {
        async function getDevice() {
            var groups = await listGroups("192.168.1.204")
            setLoading(false)
            setGroups(groups)
        }
        getDevice()
        return () => {
            setLoading(true)
        }
    }, []);

    return (
        <View style={styles.page}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Groups</Text>
            </View>
            <View style={styles.centerView}>
                {loading ? <ActivityIndicator color="#ffffff" size="large" /> : (
                    <FlatList
                        style={styles.listView}
                        contentContainerStyle={styles.listContent}
                        data={groups?.listGroups}
                        renderItem={({ item }) => (
                            <TouchableRipple
                                style={styles.item}
                                borderless={true}
                                onPress={() => {
                                    navigation.navigate("Group", { addr: item.addr, name: item.name });
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
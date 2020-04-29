import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, StatusBar, Image, FlatList } from "react-native";
import { Text, TouchableRipple, Appbar } from "react-native-paper";
import { styles } from "../styles/Styles";

type DevicesNavigationProp = StackNavigationProp<RootStackParamList, "Devices">;

type DevicesRouteProp = RouteProp<RootStackParamList, "Devices">;

type DevicesProps = {
    route: DevicesRouteProp;
    navigation: DevicesNavigationProp;
};

export function DevicesPage({ route, navigation }: DevicesProps) {
    return (
        <View style={styles.page}>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Devices</Text>
            </View>
            <View style={styles.centerView}>
                <FlatList
                    style={styles.listView}
                    data={DATA}
                    renderItem={({ item }) => (
                        <TouchableRipple
                            style={styles.listItem}
                            borderless={true}
                            onPress={() => {
                                navigation.navigate("AddDevice");
                            }}
                            rippleColor="#ffffff"
                        >
                            <Text style={styles.listItemText}>HomeDevice</Text>
                        </TouchableRipple>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <Appbar style={styles.appBar}>
                <Appbar.Action icon="menu" onPress={() => {}} />
                <Appbar.Action icon="plus" onPress={() => {}} />
                <Appbar.Action icon="magnify" onPress={() => {}} />
            </Appbar>
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
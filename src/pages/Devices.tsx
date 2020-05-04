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
                    contentContainerStyle={styles.listContent}
                    data={DATA}
                    renderItem={({ item }) => (
                        <TouchableRipple
                            style={styles.item}
                            borderless={true}
                            onPress={() => {
                                navigation.navigate("Welcome");
                            }}
                            rippleColor="#000000"
                        >
                            <View>
                                <Image style={styles.itemView}
                                    source={require("../../assets/plug.png")} />
                                <Text style={styles.itemText}>HomeDevice</Text>
                            </View>
                        </TouchableRipple>
                    )}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                />
            </View>
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
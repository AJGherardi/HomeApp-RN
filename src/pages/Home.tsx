import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Image } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import { styles } from "../styles/Styles";
import { RootStackParamList } from "./Navigation";
import PlugSvg from "../svg/Plug";

type HomeNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type HomeRouteProp = RouteProp<RootStackParamList, "Home">;

type HomeProps = {
    route: HomeRouteProp;
    navigation: HomeNavigationProp;
};

export function HomePage({ route, navigation }: HomeProps) {
    return (
        <View style={styles.page}>
            <TouchableRipple
                style={styles.homeTouchables}
                borderless={true}
                onPress={() => {
                    navigation.navigate("Devices");
                }}

                rippleColor="#ffffff"
            >
                <View style={styles.homeItem}>
                    <Text style={styles.homeItemText}>Devices</Text>
                    <PlugSvg />
                </View>
            </TouchableRipple>
            <TouchableRipple
                style={styles.homeTouchables}
                borderless={true}
                onPress={() => {
                    navigation.navigate("Groups");
                }}
                rippleColor="#ffffff"
            >
                <View style={styles.homeItem}>
                    <Text style={styles.homeItemText}>Groups</Text>
                    <Image source={require("../../assets/homeItem.png")} />
                </View>
            </TouchableRipple>
            {/* <TouchableRipple
                style={styles.homeTouchables}
                borderless={true}
                onPress={() => {
                    navigation.navigate("Devices");
                }}
                rippleColor="#ffffff"
            >
                <View style={styles.homeItem}>
                    <Text style={styles.homeItemText}>Actions</Text>
                    <Image source={require("../../assets/homeItem.png")} />
                </View>
            </TouchableRipple> */}
            <View style={{ flex: 1 }} />
        </View>
    );
}


import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, StatusBar, Text, Image } from "react-native";
import { styles } from "../styles/Styles";
import { Button } from "react-native-paper";

type DeviceNavigationProp = StackNavigationProp<RootStackParamList, "Device">;

type DeviceRouteProp = RouteProp<RootStackParamList, "Device">;

type DeviceProps = {
    route: DeviceRouteProp;
    navigation: DeviceNavigationProp;
};


export class DevicePage extends React.Component<DeviceProps> {
    render() {
        return (
            <View style={styles.page}>
                <StatusBar barStyle="light-content" backgroundColor="#121212" />
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
                                onPress={() => { }}
                            >
                                On
                            </Button>
                        </View>
                    </View>
                    <View style={{ flex: 1 }} />
                </View>
            </View>
        )
    }
}
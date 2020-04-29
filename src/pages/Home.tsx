import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text, View, StatusBar } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { styles } from "../styles/Styles";

type HomeNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type HomeRouteProp = RouteProp<RootStackParamList, "Home">;

type HomeProps = {
    route: HomeRouteProp;
    navigation: HomeNavigationProp;
};

export function HomePage({ route, navigation }: HomeProps) {
    return (
        <View style={styles.page}>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />
            <Card.Content>
                <Title>Card title</Title>
            </Card.Content>
            <Card.Content>
                <Title>Card title</Title>
            </Card.Content>
            <Card.Content>
                <Title>Card title</Title>
            </Card.Content>
        </View>
    );
}

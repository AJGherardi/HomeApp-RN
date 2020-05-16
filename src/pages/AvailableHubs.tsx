import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { styles } from "../styles/Styles";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableRipple, ActivityIndicator } from "react-native-paper";
import Zeroconf, { Service } from 'react-native-zeroconf'
import { RootStackParamList } from "./Navigation";

const zeroconf = new Zeroconf()

type AvailableHubsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AvailableHubs"
>;

type AvailableHubsRouteProp = RouteProp<
  RootStackParamList,
  "AvailableHubs"
>;

type AvailableHubsProps = {
  route: AvailableHubsRouteProp;
  navigation: AvailableHubsNavigationProp;
};

export function AvailableHubsPage({ route, navigation }: AvailableHubsProps) {
  const [loading, setLoading] = useState(true);
  const [hubs, setHubs] = useState<Service[]>([]);

  useEffect(() => {
    zeroconf.on('resolved', service => {
      console.log(service)
      setHubs([service])
      setLoading(false)
    })
    zeroconf.scan('alexandergherardi', 'tcp', 'local.')
    return () => {
      zeroconf.stop()
      setLoading(true)
      setHubs([])
    }
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Find your Hub</Text>
      </View>
      <View style={styles.centerView}>
        {loading ? <ActivityIndicator color="#ffffff" size="large" /> : (
          <FlatList
            style={styles.listView}
            data={hubs}
            renderItem={({ item }) => (
              <TouchableRipple
                style={styles.listItem}
                borderless={true}
                onPress={() => {
                  navigation.navigate("AddHub", { host: item.host });
                }}
                rippleColor="#ffffff"
              >
                <Text style={styles.listItemText}>{item.name}</Text>
              </TouchableRipple>
            )}
            keyExtractor={(item: Service) => item.host}
          />)}
      </View>
      <View style={styles.nextView}></View>
    </View>
  );
}


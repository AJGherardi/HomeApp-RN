import React from "react";
import { Text, View, StatusBar, FlatList } from "react-native";
import { styles } from "../styles/Styles";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableRipple, ActivityIndicator } from "react-native-paper";
import Zeroconf, { Service } from 'react-native-zeroconf'
import { Item } from "react-native-paper/lib/typescript/src/components/List/List";

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

export class AvailableHubsPage extends React.Component<AvailableHubsProps> {
  state = {
    hubs: [],
    loading: true
  }
  componentDidMount() {
    zeroconf.on('resolved', service => {
      this.setState({ hubs: [service], loading: false });
    })
    zeroconf.scan('alexandergherardi', 'tcp', 'local.')
  }
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Find your Hub</Text>
        </View>
        <View style={styles.centerView}>
          {this.state.loading ? <ActivityIndicator color="#ffffff" size="large" /> : (
            <FlatList
              style={styles.listView}
              data={this.state.hubs}
              renderItem={({ item }) => (
                <TouchableRipple
                  style={styles.listItem}
                  borderless={true}
                  onPress={() => {
                    zeroconf.stop()
                    this.props.navigation.navigate("AddHub");
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
}

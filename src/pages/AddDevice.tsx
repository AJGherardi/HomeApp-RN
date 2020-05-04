import React from "react";
import { Text, View, StatusBar, Image } from "react-native";
import { Button } from "react-native-paper";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "../styles/Styles";
import ConfigHub from "../api/ConfigHub";
import GetProvData from "../api/GetProvData";

type AddDeviceNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AddDevice"
>;

type AddDeviceRouteProp = RouteProp<RootStackParamList, "AddDevice">;

type AddDeviceProps = {
  route: AddDeviceRouteProp;
  navigation: AddDeviceNavigationProp;
};

export class AddDevicePage extends React.Component<AddDeviceProps> {
  render() {
    return (
      <View style={styles.page}>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Add Device</Text>
        </View>
        <View style={styles.centerView}>
          <View style={styles.rangeView}>
            <View style={styles.upperRangeView}>
              <Image source={require("../../assets/range.png")} />
            </View>
            <View style={styles.lowerRangeView}>
              <Text style={styles.rangeText}>
                Get within 2-4 ft of your device
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.nextView}>
          <Button
            contentStyle={styles.nextButton}
            color="#FFEE58"
            mode="contained"
            onPress={async () => {
              // var provData = (await GetProvData.getProvData()).getProvData
              // console.log(provData.keyIndex)
              // ConfigHub.configHub()
              this.props.navigation.navigate("App")
            }}
          >
            Add
          </Button>
        </View>
      </View>
    );
  }
}


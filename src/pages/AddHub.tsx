import React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "../styles/Styles";
import { configHub } from "../api/ConfigHub";
import { getProvData } from "../api/GetProvData";
import SInfo from "react-native-sensitive-info"

type AddHubNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AddHub"
>;

type AddHubRouteProp = RouteProp<RootStackParamList, "AddHub">;

type AddHubProps = {
  route: AddHubRouteProp;
  navigation: AddHubNavigationProp;
};

export class AddHubPage extends React.Component<AddHubProps> {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Add Hub</Text>
        </View>
        <View style={styles.centerView}>
          <View style={styles.rangeView}>
            <View style={styles.upperRangeView}>
              <Image source={require("../../assets/range.png")} />
            </View>
            <View style={styles.lowerRangeView}>
              <Text style={styles.rangeText}>
                Get within 2-4 ft of your Hub
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
              // Configure the hub
              var key = await configHub(this.props.route.params.host)
              // Store webkey
              await SInfo.setItem("webKey", key, {})
              // Get webKey
              console.log(await SInfo.getItem("webKey", {}))
              // Save the key as root
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


import React from "react";
import { Text, View, StatusBar, Image } from "react-native";
import { styles } from "../styles/Styles";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "react-native-paper";

type AddHubSplashNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AddHubSplash"
>;

type AddHubSplashRouteProp = RouteProp<
  RootStackParamList,
  "AddHubSplash"
>;

type AddHubSplashProps = {
  route: AddHubSplashRouteProp;
  navigation: AddHubSplashNavigationProp;
};

export class AddHubSplashPage extends React.Component<AddHubSplashProps> {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Add A Hub</Text>
        </View>
        <View style={styles.centerView}>
          <Image source={require("../../assets/outlet.png")} />
        </View>
        <View style={styles.nextView}>
          <Button
            contentStyle={styles.nextButton}
            color="white"
            mode="contained"
            onPress={() => {
              this.props.navigation.navigate("AvailableHubs");
            }}
          >
            Next
          </Button>
        </View>
      </View>
    );
  }
}

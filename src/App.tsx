import "react-native-gesture-handler";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Provider as PaperProvider, Appbar, Button } from "react-native-paper";
import { WelcomePage } from "./pages/Welcome";
import { AddDeviceSplashPage } from "./pages/AddDeviceSplash";
import { AvailableDevicesPage } from "./pages/AvailableDevices";
import { AddDevicePage } from "./pages/AddDevice";
import { HomePage } from "./pages/Home";
import { DevicesPage } from "./pages/Devices";
import { GroupsPage } from "./pages/Group";
import { styles } from "./styles/Styles";
import { View, StatusBar } from "react-native";
import { DevicePage } from "./pages/Device";
import BottomSheet from 'reanimated-bottom-sheet'
import BottomSheetBehavior from "reanimated-bottom-sheet";
import { AddHubPage } from "./pages/AddHub";
import { AvailableHubsPage } from "./pages/AvailableHubs";
import { AddHubSplashPage } from "./pages/AddHubSplash";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from 'react-native-splash-screen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppStack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
  stackAnimation: "fade"
}

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <PaperProvider>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />
            <View style={styles.page}>
              <RootStack.Navigator initialRouteName="Welcome" screenOptions={{
                cardStyle: {
                  backgroundColor: 'rgba(0,0,0,0.5)',
                },
                ...screenOptions
              }}>
                <RootStack.Screen
                  name="App"
                  component={AppPages}
                />
                <RootStack.Screen
                  name="Welcome"
                  component={WelcomePage}
                />
                <RootStack.Screen
                  name="AddDeviceSplash"
                  component={AddDeviceSplashPage}
                />
                <RootStack.Screen
                  name="AvailableDevices"
                  component={AvailableDevicesPage}
                />
                <RootStack.Screen
                  name="AddDevice"
                  component={AddDevicePage}
                />
                <RootStack.Screen
                  name="AddHubSplash"
                  component={AddHubSplashPage}
                />
                <RootStack.Screen
                  name="AvailableHubs"
                  component={AvailableHubsPage}
                />
                <RootStack.Screen
                  name="AddHub"
                  component={AddHubPage}
                />
                <RootStack.Screen
                  name="Device"
                  component={DevicePage}
                />
              </RootStack.Navigator>
            </View>
          </PaperProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}

type AppNavigationProp = StackNavigationProp<RootStackParamList, "App">;

type AppRouteProp = RouteProp<RootStackParamList, "App">;

type AppProps = {
  route: AppRouteProp;
  navigation: AppNavigationProp;
};

export class AppPages extends React.Component<AppProps> {
  sheetContent = () => (
    <View style={{
      height: 200, backgroundColor: "#252525",
      borderRadius: 30, justifyContent: "center", alignItems: "center",
    }}>
      <Button
        contentStyle={styles.nextButton}
        color="white"
        mode="contained"
        onPress={() => {
          this.props.navigation.navigate("Welcome");
        }}
      >
        Next
      </Button>
    </View>
  )
  render() {
    return (
      <SafeAreaView style={styles.page}>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />
        <AppStack.Navigator initialRouteName="Home" screenOptions={{
          cardStyle: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          ...screenOptions
        }}>
          <AppStack.Screen
            name="Home"
            component={HomePage}
          />
          <AppStack.Screen
            name="Devices"
            component={DevicesPage}
          />
          <AppStack.Screen
            name="Groups"
            component={GroupsPage}
          />
        </AppStack.Navigator>
        <BottomSheet
          ref={bs}
          snapPoints={[200, 0, 0]}
          renderContent={this.sheetContent}
          initialSnap={2}
        />
        <Appbar style={styles.appBar}>
          <Appbar.Action icon="menu" onPress={() => { bs.current?.snapTo(0) }} />
          <Appbar.Action icon="plus" onPress={() => { this.props.navigation.navigate("AddDeviceSplash") }} />
        </Appbar>
      </SafeAreaView>
    );
  }
}

var bs = React.createRef<BottomSheetBehavior>()
import "react-native-gesture-handler";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import { Provider as PaperProvider, Appbar, Button } from "react-native-paper";
import { WelcomePage } from "./pages/Welcome";
import { AddDeviceSplashPage } from "./pages/AddFirstDevice";
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

const RootStack = createStackNavigator<RootStackParamList>();

const AppStack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,

  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
    },
  }),
}

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />
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
            name="Device"
            component={DevicePage}
          />
        </RootStack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
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
      <View style={styles.page}>
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
      </View>
    );
  }

}

var bs = React.createRef<BottomSheetBehavior>()
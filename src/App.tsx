import "react-native-gesture-handler";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Provider as PaperProvider, Appbar, Button, IconButton } from "react-native-paper";
import { WelcomePage } from "./pages/Welcome";
import { AddDeviceSplashPage } from "./pages/AddDeviceSplash";
import { AvailableDevicesPage } from "./pages/AvailableDevices";
import { AddDevicePage } from "./pages/AddDevice";
import { HomePage } from "./pages/Home";
import { DevicesPage } from "./pages/Devices";
import { GroupsPage } from "./pages/Groups";
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
import { RootStackParamList } from "./pages/Navigation";
import { GroupPage } from "./pages/Group";
import { Text } from "react-native-paper";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppStack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
  stackAnimation: "fade"
}

export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, []);
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <PaperProvider>
          <StatusBar barStyle="light-content" backgroundColor="#121212" />
          <View style={styles.page}>
            <RootStack.Navigator initialRouteName="App" screenOptions={{
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


type AppNavigationProp = StackNavigationProp<RootStackParamList, "App">;

type AppRouteProp = RouteProp<RootStackParamList, "App">;

type AppProps = {
  route: AppRouteProp;
  navigation: AppNavigationProp;
};

export function AppPages({ route, navigation }: AppProps) {
  const [visable, setVisable] = useState(true);
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
        <AppStack.Screen
          name="Group"
          component={GroupPage}
        />
      </AppStack.Navigator>
      <BottomSheet
        ref={bs}
        snapPoints={[300, 0, 0]}
        renderHeader={() => (<View></View>)}
        renderContent={() => (
          <View style={{
            height: 300, backgroundColor: "#252525",
            borderRadius: 30, justifyContent: "center", alignItems: "center",
          }}>
            <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
              <IconButton color="white" icon="chevron-down" size={52} onPress={() => {
                bs.current?.snapTo(2)
                setVisable(true)
              }} />
              <Text style={styles.titleText}>Options</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Button
                contentStyle={styles.nextButton}
                color="white"
                mode="contained"
                onPress={() => {
                  navigation.navigate("Welcome");
                }}
              >
                Reset
          </Button>
            </View>
          </View>
        )}
        initialSnap={2}
      />
      <Appbar style={styles.appBar}>
        {visable &&
          <View >
            <Appbar.Action color="white" icon="menu" onPress={() => {
              bs.current?.snapTo(0)
              setVisable(false)
            }} />
          </View>
        }
        {visable &&
          <View>
            <Appbar.Action color="white" icon="plus" onPress={() => { navigation.navigate("AddDeviceSplash") }} />
          </View>
        }
      </Appbar>
    </SafeAreaView>
  );
}


var bs = React.createRef<BottomSheetBehavior>()
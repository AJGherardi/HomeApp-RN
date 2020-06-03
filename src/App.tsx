import "react-native-gesture-handler";
import { NavigationContainer, RouteProp, NavigationContainerRef } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Provider as PaperProvider, Appbar, Button } from "react-native-paper";
import { WelcomePage } from "./pages/Welcome";
import { AddDeviceSplashPage } from "./pages/AddDeviceSplash";
import { AvailableDevicesPage } from "./pages/AvailableDevices";
import { AddDevicePage } from "./pages/AddDevice";
import { HomePage } from "./pages/Home";
import { DevicesPage } from "./pages/Devices";
import { GroupsPage } from "./pages/Groups";
import { styles } from "./styles/Styles";
import { View, StatusBar, SafeAreaView } from "react-native";
import { DevicePage } from "./pages/Device";
import { AddHubPage } from "./pages/AddHub";
import { AvailableHubsPage } from "./pages/AvailableHubs";
import { AddHubSplashPage } from "./pages/AddHubSplash";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from 'react-native-splash-screen';
import { RootStackParamList } from "./pages/Navigation";
import { GroupPage } from "./pages/Group";
import { Text } from "react-native-paper";
import { AddGroupSplashPage } from "./pages/AddGroupSplash";
import { AddGroupPage } from "./pages/AddGroup";
import { SelectGroupPage } from "./pages/SelectGroup";
import RBSheet from "react-native-raw-bottom-sheet";
import SInfo from "react-native-sensitive-info"
import { resetHub } from "./api/ResetHub";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppStack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
  stackAnimation: "fade"
}

export default function App() {
  const ref = React.useRef<NavigationContainerRef>(null);
  useEffect(() => {
    async function init() {
      var host = await SInfo.getItem("host", {})
      if (host == null) {
        ref.current?.navigate('Welcome')
      }
      SplashScreen.hide()
    }
    init()
  }, []);

  return (
    <NavigationContainer ref={ref}>
      <PaperProvider>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />
        <View style={styles.page}>
          <RootStack.Navigator screenOptions={{
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
              name="AddGroupSplash"
              component={AddGroupSplashPage}
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
              name="AddGroup"
              component={AddGroupPage}
            />
            <RootStack.Screen
              name="Device"
              component={DevicePage}
            />
            <RootStack.Screen
              name="SelectGroup"
              component={SelectGroupPage}
            />
          </RootStack.Navigator>
        </View>
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

export function AppPages({ route, navigation }: AppProps) {
  const menuSheet = React.createRef<RBSheet>()
  const addSheet = React.createRef<RBSheet>()

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
      <RBSheet
        ref={menuSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#fff"
          },
          container: {
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            backgroundColor: "#252525"
          }
        }}
      >
        <View style={{
          height: 260,
          borderRadius: 30, justifyContent: "center", alignItems: "center",
        }}>
          <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
            <Text style={styles.titleText}>Options</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Button
              contentStyle={styles.nextButton}
              color="white"
              mode="contained"
              onPress={async () => {
                var host = await SInfo.getItem("host", {})
                var webKey = await SInfo.getItem("webKey", {})
                await resetHub(host, webKey)
                navigation.navigate("Welcome");
                menuSheet.current?.close()
              }}
            >
              Reset
          </Button>
          </View>
        </View>
      </RBSheet>
      <RBSheet
        ref={addSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#fff"
          },
          container: {
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            backgroundColor: "#252525"
          }
        }}
      >
        <View style={{
          height: 260,
          justifyContent: "center", alignItems: "center", flexDirection: "column"
        }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.titleText}>Add</Text>
          </View>
          <View style={{ flex: 2, flexDirection: "column" }}>
            <Button
              contentStyle={styles.nextButton}
              color="white"
              mode="contained"
              style={{ margin: 10 }}
              onPress={() => {
                navigation.navigate("AddDeviceSplash");
                addSheet.current?.close()
              }}
            >
              Device
              </Button>
            <Button
              contentStyle={styles.nextButton}
              color="white"
              mode="contained"
              style={{ margin: 10 }}
              onPress={() => {
                navigation.navigate("AddGroupSplash");
                addSheet.current?.close()
              }}
            >
              Group
              </Button>
          </View>
        </View>
      </RBSheet>
      <Appbar style={styles.appBar}>
        <View>
          <Appbar.Action color="white" icon="menu" onPress={() => {
            menuSheet.current?.open()
          }} />
        </View>
        <View>
          <Appbar.Action color="white" icon="plus" onPress={() => {
            addSheet.current?.open()
          }} />
        </View>
      </Appbar>
    </SafeAreaView>
  );
}
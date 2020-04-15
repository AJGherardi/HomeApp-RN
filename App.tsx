import "react-native-gesture-handler";
import { NavigationContainer, NavigationContext, RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider as PaperProvider, Button } from "react-native-paper";
import { ApolloProvider, useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://192.168.1.204:8080/graphql",
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
});

interface ProvData {
  networkKey: string;
  keyIndex: string;
  ivIndex: string;
  flags: string;
  nextDevAddr: string;
}

interface Group {
  name: string;
  addr: string;
}

interface ProvDataVars {
  webKey: string;
}

interface AddGroupVars {
  webKey: string;
  name: string;
}

const GET_PROV_DATA = gql`
  query {
    getProvData {
      networkKey
      keyIndex
      ivIndex
      flags
      nextDevAddr
    }
  }
`;

const CONFIG_HUB = gql`
  mutation {
    configHub
  }
`;

const ADD_GROUP = gql`
  mutation addGroup($name: String!) {
    addGroup(name: $name) {
      name
      addr
    }
  }
`;

const ADD_DEVICE = gql`
  mutation addDevice($name: String!, $devKey: String!, $addr: String!) {
    addDevice(name: $name, devKey: $devKey, addr: $addr) {
      name
      addr
    }
  }
`;

const LIST_DEVICES = gql`
  query {
    listDevices {
      name
      addr
      type
    }
  }
`;

const GET_STATE = gql`
  query getState($devAddr: String!, $elemNumber: Int!) {
    getState(devAddr: $devAddr, elemNumber: $devAddr) {
      state
      stateType
    }
  }
`;

const SET_STATE = gql`
  mutation setState($devKey: String!, $elemNumber: Int!, $value: String!) {
    setState(devKey: $devKey, elemNumber: $elemNumber, value: $value) {
      state
      stateType
    }
  }
`;

export function ProvDataGet() {
  const { loading, data } = useQuery<ProvData, ProvDataVars>(GET_PROV_DATA, {
    variables: { webKey: "9dIqK8a0fksl+E7jiJlSKw==" },
  });
  return (
    <View>
      {loading ? (
        <Text style={styles.homeText}>Loading ...</Text>
      ) : (
        <View>
          <Text style={styles.homeText}>Data</Text>
          {console.log(data)}
        </View>
      )}
    </View>
  );
}

export function ConfigHub() {
  const [configHub, { error, data }] = useMutation<string>(CONFIG_HUB, {
    variables: {},
  });
  return (
    <View>
      <Text style={styles.homeText}>Loading ...</Text>
      <Button onPress={() => configHub().then(() => console.log(data))}>
        test
      </Button>
    </View>
  );
}

export function AddGroup() {
  const [addGroup, { error, data }] = useMutation<Group, AddGroupVars>(
    ADD_GROUP,
    {
      variables: { webKey: "E2p8/q0jYUmia1dnfVdPRg==", name: "bob" },
    }
  );
  return (
    <View>
      <Text style={styles.homeText}>Loading ...</Text>
      <Button onPress={() => addGroup().then(() => console.log(data?.addr))}>
        addGroup
      </Button>
    </View>
  );
}

export function HomePage({ route, navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.titleView}>
        <Text style={styles.homeText}>Home</Text>
        <Text style={styles.byText}>by</Text>
        <Text style={styles.nameText}>alexander gherardi</Text>
      </View>
      <View style={styles.nextView}>
        <Button
          contentStyle={styles.nextButton}
          color="white"
          mode="contained"
          onPress={() => {navigation.navigate("Details")}}
        >
          continue
        </Button>
      </View>
    </View>
  );
}

export function AddFirstDevicePage() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.titleView}>
        <Text style={styles.homeText}>Add A Device</Text>
      </View>
    </View>
  );
}

const RootStack = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

export default function App() {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <PaperProvider>
          <RootStack.Navigator>
            <RootStack.Screen name="Home" component={HomePage} />
            <RootStack.Screen name="Details" component={AddFirstDevicePage} />
          </RootStack.Navigator>
        </PaperProvider>
      </ApolloProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#121212",
  },
  nextView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleView: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  homeText: {
    color: "white",
    fontSize: 72,
    fontFamily: "Roboto-Black",
  },
  byText: {
    color: "white",
    fontSize: 30,
    marginBottom: 8,
  },
  nameText: {
    color: "white",
    fontSize: 36,
    fontFamily: "OleoScript-Regular",
  },
  nextButton: {
    width: 312,
    height: 42,
  },
});

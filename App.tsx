import React from "react";
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

interface ProvDataVars {
  webKey: string;
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

export function ProvDataGet() {
  const { loading, data } = useQuery<ProvData, ProvDataVars>(GET_PROV_DATA, {
    variables: { webKey: "RDzN8mxycOcxpcwuFYTVBA==" },
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

export default function App() {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />
        <View style={styles.container}>
          <Button>bob</Button>
          <ProvDataGet></ProvDataGet>
        </View>
      </PaperProvider>
    </ApolloProvider>
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

import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { styles } from "../styles/Styles";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableRipple, ActivityIndicator } from "react-native-paper";
import { RootStackParamList } from "./Navigation";
import { listGroups } from "../api/ListGroups";
import { ListGroupsQueryResponse } from "../api/__generated__/ListGroupsQuery.graphql";
import SInfo from "react-native-sensitive-info"

type SelectGroupNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SelectGroup"
>;

type SelectGroupRouteProp = RouteProp<
  RootStackParamList,
  "SelectGroup"
>;

type SelectGroupProps = {
  route: SelectGroupRouteProp;
  navigation: SelectGroupNavigationProp;
};

export function SelectGroupPage({ route, navigation }: SelectGroupProps) {
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState<ListGroupsQueryResponse>();

  useEffect(() => {
    async function getGroups() {
      var host = await SInfo.getItem("host", {})
      var groups = await listGroups(host)
      setGroups(groups)
      setLoading(false)
    }
    getGroups()
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Select A Group</Text>
      </View>
      <View style={styles.centerView}>
        {loading ? <ActivityIndicator color="#ffffff" size="large" /> : (
          <FlatList
            style={styles.listView}
            data={groups?.listGroups}
            renderItem={({ item }) => (
              <TouchableRipple
                style={styles.listItem}
                borderless={true}
                onPress={() => {
                  navigation.navigate("AvailableDevices", { group: item.addr });
                }}
                rippleColor="#ffffff"
              >
                <Text style={styles.listItemText}>{item.name}</Text>
              </TouchableRipple>
            )}
            keyExtractor={(item) => item.addr}
          />
        )}
      </View>
      <View style={styles.nextView}></View>
    </View>
  );
}

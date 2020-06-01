import React, { useState } from "react";
import { Text, View, StatusBar, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "../styles/Styles";
import { RootStackParamList } from "./Navigation";
import { addGroup } from "../api/AddGroup";
import { addDevice } from "../api/AddDevice";
import SInfo from "react-native-sensitive-info"

type AddGroupNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AddGroup"
>;

type AddGroupRouteProp = RouteProp<RootStackParamList, "AddGroup">;

type AddGroupProps = {
  route: AddGroupRouteProp;
  navigation: AddGroupNavigationProp;
};

export function AddGroupPage({ route, navigation }: AddGroupProps) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  return (
    <View style={styles.page}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Add Group</Text>
      </View>
      <View style={styles.centerView}>
        <View style={{ alignSelf: "flex-start", flexDirection: "column", flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
          <Text style={styles.subtitleText}>Info</Text>
          <TextInput
            label='Name'
            mode="outlined"
            style={{ width: "85%" }}
            theme={{
              dark: true, mode: "adaptive",
              colors: {
                text: 'white', placeholder: 'white',
                background: "#121212", primary: "#FFEE58"
              }
            }}
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>
      </View>
      <View style={styles.nextView}>
        <Button
          contentStyle={styles.nextButton}
          color="#FFEE58"
          mode="contained"
          loading={loading}
          onPress={async () => {
            setLoading(true)
            var host = await SInfo.getItem("host", {})
            await addGroup(host, name)
            navigation.navigate("Home")
          }}
        >
          Add
          </Button>
      </View>
    </View>
  );
}


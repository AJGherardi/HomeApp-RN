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
import RBSheet from "react-native-raw-bottom-sheet";
import RangeSvg from "../svg/Range";

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
  const addSheet = React.createRef<RBSheet>()

  return (
    <View style={styles.page}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Add Group</Text>
      </View>
      <View style={styles.centerView}>
        <View style={styles.rangeView}>
          <View style={styles.upperRangeView}>
            <RangeSvg />
          </View>
          <View style={styles.lowerRangeView}>
            <Text style={styles.rangeText}>
              A group contains related devices
              </Text>
          </View>
        </View>
      </View>
      <View style={styles.nextView}>
        <Button
          contentStyle={styles.nextButton}
          color="#FFEE58"
          mode="contained"
          loading={loading}
          onPress={async () => {
            addSheet.current?.open()
          }}
        >
          Add
          </Button>
      </View>
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
          height: 200,
          justifyContent: "center", alignItems: "center", flexDirection: "column"
        }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.subtitleText}>Set Name</Text>
          </View>
          <View style={{ flex: 1, alignSelf: "stretch", justifyContent: "center", margin: 25 }}>
            <TextInput
              label='Name'
              mode="outlined"
              style={{ width: "80%", alignSelf: "center" }}
              theme={{
                dark: true, mode: "adaptive",
                colors: {
                  text: 'white', placeholder: 'white',
                  background: "#252525", primary: "#FFEE58"
                }
              }}
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              contentStyle={styles.nextButton}
              color="#FFEE58"
              mode="contained"
              loading={loading}
              onPress={async () => {
                setLoading(true)
                var host = await SInfo.getItem("host", {})
                var webKey = await SInfo.getItem("webKey", {})
                await addGroup(host, webKey, name)
                navigation.navigate("Home")
                addSheet.current?.close()
              }}
            >
              Add
            </Button>
          </View>
        </View>
      </RBSheet>

    </View>
  );
}
//

import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { styles } from "../styles/Styles";


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